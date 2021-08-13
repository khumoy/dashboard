import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboards from './pages/Dashboards';
import store from './redux/store';

const App = () => {

  return (
    <Router>
      <Provider store={store} >
        <Switch>
          <Route path="/" exact> <Redirect to="/dashboard/home" /></Route>
          <Route path="/dashboard/:menu"><Dashboards /> </Route>
        </Switch>
      </Provider>
    </Router >
  );
}

export default App;
