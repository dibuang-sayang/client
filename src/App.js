import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Home, UserSetting } from './pages';
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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <GuardedRoute path="/user/:id/setting" component={UserSetting} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GuardProvider>
      </div>
    </Router>
  );
}

export default App;
