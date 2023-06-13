import React from "react";
import { Card } from "react-bootstrap";
export const ProductList = ({ status, data }) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }

  return (
    <div className="text-center">
      {data.map((a, b) => {
        return (
          <div className="card" key={b}>
            <div className="card-image">
              <img src={a.imageUrl} width={300} alt={a.name} />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h1>{a.name}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Loading = () => {
  return <h3>Loading...</h3>;
};

export const Error = ({ message }) => {
  return <div>{message}</div>;
};
export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "Loaded"
};
