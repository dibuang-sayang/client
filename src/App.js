import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Login,
  Register,
  Home,
  UserSetting,
  AboutUs,
  Contact,
  Market,
  Cart,
  ChatBoard,
  Chatbox,
} from './pages';
import { Navbar } from './components';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './config';
import { user } from './query';
import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { currentUserVar } from './cache';

function App() {
  const { data: currentLoginUser, error, loading } = useQuery(
    user.FIND_USER_BY_ID,
    {
      context: {
        headers: {
          token: localStorage.getItem('token'),
        },
      },
      onCompleted: () => {
        console.log('sukses');
      },
    }
  );

  useEffect(() => {
    if (currentLoginUser) {
      console.log(currentLoginUser.user);
      currentUserVar(currentLoginUser.user);
    } else console.log('tidak ada yang login');
  }, [currentLoginUser]);

  return (
    <Router>
      <Navbar />
      <div className="">
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <GuardedRoute path="/chatbox" component={Chatbox} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <GuardedRoute path="/pasar" component={Market} />
            <Route path="/tentang-kami" component={AboutUs} />
            <Route path="/kontak" component={Contact} />
            <GuardedRoute path="/keranjang" component={Cart} />
            <GuardedRoute path="/chat" component={ChatBoard} />
            <GuardedRoute path="/user/setting" component={UserSetting} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GuardProvider>
      </div>
      {/* <FooterBar /> */}
    </Router>
  );
}

export default App;
