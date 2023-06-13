import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from "./screens/UserProfile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" Component={Cart} />
        <Route path="/products" Component={Products} />
        <Route path="/users" Component={UserProfile} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
