import { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
const Product = lazy(() => import('pages/Product'));
const Home = lazy(() => import('pages/Home'));
const Shop = lazy(() => import('pages/Shop'));
const Signin = lazy(() => import('pages/Signin'));
const Page404 = lazy(() => import('pages/Page404'));

const RouteContainer = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop/:category' component={Shop} />
        <Route exact path='/product/:slug' component={Product} />
        <Route exact path='/signin' component={Signin} />
        <Route path='/*' component={Page404} />
      </Switch>
    </Router>
  );
};

export default RouteContainer;
