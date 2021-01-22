import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Home } from './pages';

function App() {
  return (
    <Router>
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
