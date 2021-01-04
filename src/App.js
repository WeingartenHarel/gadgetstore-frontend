import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Router>
        <Switch>
          <Route path="/" component={ Homepage } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
