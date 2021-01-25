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

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <Route path="/chatbox" component={Chatbox} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/pasar" component={Market} />
            <Route path="/tentang-kami" component={AboutUs} />
            <Route path="/kontak" component={Contact} />
            <Route path="/keranjang" component={Cart} />
            <Route path="/chat" component={ChatBoard} />
            <Route path="/user/:id/setting" component={UserSetting} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GuardProvider>
      </div>
      {/* <FooterBar /> */}
    </Router>
  );
}

export default App;
