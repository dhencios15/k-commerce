import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Product from 'pages/Product';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
const RouteContainer = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:slug' component={Product} />
      </Switch>
    </Router>
  );
};

export default RouteContainer;
