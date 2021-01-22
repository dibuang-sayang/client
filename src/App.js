import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Home } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
