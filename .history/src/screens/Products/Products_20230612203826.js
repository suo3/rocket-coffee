import React, { useEffect, useState } from "react";
import {
  statusTypes,
  ProductList
} from "../../components/patterns/ProductList";
import { Server } from "miragejs";

let server = new Server();

server.get("/api/products/", {
  data: [
    {
      id: 1,
      name: "Mocha",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALolZhqVM/200x100/"
    },
    {
      id: 2,
      name: "Mocha KASHINGTON",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALolZhqVM/200x100/"
    }
  ]
});

const Products = () => {
  const [productState, setProductState] = useState({
    data: [],
    status: statusTypes.loading
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const productFetch = await fetch("api/products");
        const productResponse = await productFetch.json();
        setProductState({
          data: productResponse.data,
          status: statusTypes.loaded
        });
      } catch (ex) {
        console.error(ex);
        setProductState({ data: [], status: statusTypes.errored });
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h3>Products</h3>
      <ProductList data={productState.data} status={productState.status} />
    </div>
  );
};

export default Products;
