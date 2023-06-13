import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from ".screens/UserProfile/UserProfile";

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
