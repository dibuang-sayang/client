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
} from './pages';
import { Navbar, FooterBar } from './components';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './config';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/pasar" component={Market} />
            <Route path="/tentang-kami" component={AboutUs} />
            <Route path="/kontak" component={Contact} />
            <Route path="/keranjang" component={Cart} />
            <GuardedRoute path="/user/:id/setting" component={UserSetting} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GuardProvider>
      </div>
      {/* <FooterBar /> */}
    </Router>
  );
}

export default App;
