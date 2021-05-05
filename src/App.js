import './App.css';
import Header from './components/Header/Header';
// import Product from './components/Products/Product';
import Shops from './components/Shops/Shops';
// import {
//   BrowserRouter as Router, 
  // Switch,
  // Route,
  // Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Router>
        <Switch>

          <Route path="/shop">
             <Shops></Shops>
          </Route>

          <Route path="/review">
             <Review></Review>
          </Route>

          <Route path="/inventory">
             <Inventory></Inventory>
          </Route>

          <Route exact path="/">
             <Shops></Shops>
          </Route>
          
          <Route path="/product/:productKey">
             <ProductDetail></ProductDetail>
          </Route>

          <Route path="*">
             <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
       
       
    </div>
  );
}

export default App;
