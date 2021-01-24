import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Home, UserSetting } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user/:id/setting" component={UserSetting} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
