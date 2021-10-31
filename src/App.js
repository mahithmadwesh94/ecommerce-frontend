import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { connect } from "react-redux"

function App(props) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductListPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/login">
          {Object.keys(props.user).length ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

const mapStateToProps = (props) => {
  return props
}

export default connect(mapStateToProps)(App);
