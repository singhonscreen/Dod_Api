
import './App.css';
import { Redirect, Route,  Switch } from 'react-router-dom';
import { Router } from 'react-router';

import HomePage from './components/HomePage';
import Login from './components/Login';
import history from './components/history';

function App() {
  return (
    <div className="App">
      <Router history = {history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/loggedin" component={HomePage} />
          <Redirect to ="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
