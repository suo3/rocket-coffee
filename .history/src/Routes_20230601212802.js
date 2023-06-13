import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Cart } from "./screens/Cart";
import Products from "./screens/Products";
import { UserProfile } from "./screens/UserProfile";
import { Navigation } from "./components/patterns/Navigation";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/cart" Component={Cart} />
        <Route path="/products" Component={Products} />
        <Route path="/userProfile" Component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
