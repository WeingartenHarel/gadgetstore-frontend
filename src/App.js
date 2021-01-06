import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import AppHeader from './components/AppHeader/AppHeader';
import StoreDetail from './components/StoreDetail/StoreDetail';
import { ProductEdit } from './Pages/ProductEdit/ProductEdit';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/store/details/:id" component={StoreDetail} />
          <Route path="/store/edit/:id?" component={ProductEdit} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
