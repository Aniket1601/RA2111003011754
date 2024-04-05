import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/product/:id" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
