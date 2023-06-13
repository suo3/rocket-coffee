import React from "react";

export const ProductList = ({ status, data }) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  console.log(data);
  return (
    <div>
      {data.map((a, b) => {
        return (
          <div>
            <h1>{a.name}</h1>
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
