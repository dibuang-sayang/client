import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import {
  Login,
  Register,
  Home,
  UserSetting,
  AboutUs,
  Market,
  ChatBoard,
  OfficeList,
  Office,
  Cart,
} from './pages';
import { Error404, Loader, Navbar } from './components';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './config';
import { user, cart } from './query';
import { useQuery } from '@apollo/client';
import React, { useEffect, Fragment } from 'react';
import { currentUserVar, checkOutVar } from './cache';

function App() {
  const location = useLocation();
  const { data: currentLoginUser, loading, error, refetch } = useQuery(
    user.FIND_USER_BY_ID,
    {
      context: {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
    }
  );

  const { data: cartData } = useQuery(cart.FIND_ALL_CART, {
    context: {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
    onCompleted: () => {
      checkOutVar(cartData);
    },
  });

  useEffect(() => {
    if (currentLoginUser) {
      currentUserVar(currentLoginUser.user);
      refetch();
    }
  }, [currentLoginUser, refetch]);


  useEffect( () => {
    if(location.state?.refetch){
      console.log(location.state);
      refetch()
    }
  }, [location])
  // if (error) return <Error404 />
  // if (loading) return <Loader />;
  return (
    <Fragment>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Navbar />
      )}
      <div className="">
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <Route
              path="/login"
              render={() => {
                if (localStorage.getItem('token')) {
                  return <Redirect to="/" />;
                } else return <Login />;
              }}
            />
            <Route
              path="/register"
              render={() => {
                if (localStorage.getItem('token')) {
                  return <Redirect to="/" />;
                } else return <Register />;
              }}
            />
            <Route path="/pasar" component={Market} />
            <Route path="/tentang-kami" component={AboutUs} />
            <GuardedRoute path="/keranjang" component={Cart} />
            <GuardedRoute path="/chat/:receiver_id" component={ChatBoard} />
            <GuardedRoute path="/chat" component={ChatBoard} />
            <GuardedRoute path="/user/setting" component={UserSetting} />
            <GuardedRoute path="/office-list" component={OfficeList} />
            <GuardedRoute path="/office" component={Office} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GuardProvider>
      </div>
      {/* <FooterBar /> */}
    </Fragment>
  );
}

export default App;
