import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <Link to="/cart">Cart</Link>
      </ul>
    </nav>
  );
};
