import './App.css';
import  {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Checkout from './containers/Home/components/checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/" component={Layout}/>
        <Redirect to="/"/>

      </Switch>
    </Router>
  );
}

export default App;
