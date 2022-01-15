import './App.css';
import  {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Checkout from './containers/checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/checkout" component={Checkout}/>
        <Route  path="/" component={Layout}/>
        <Redirect to="/"/>

      </Switch>
    </Router>
  );
}

export default App;
