import React from "react";
import { BrowserRouter, Switch, Route } from "react-dom";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from "./screens/UserProfile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" Component={Cart} />
        <Route path="/products" Component={Products} />
        <Route path="/users" Component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
