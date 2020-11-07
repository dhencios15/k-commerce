import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ReactQueryDevtools } from 'react-query-devtools';
import 'assets/css/tailwind.output.css';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto'>
        <Router>
          <Navbar />
          <Hero />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
        {fetchDevTools}
        <Footer />
      </div>
    </div>
  );
}

export default App;
