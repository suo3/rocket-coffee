import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
export const ProductList = ({ status, data }) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }

  return (
    <div>
      {data.map((a, b) => {
        return (
          <Card className="card" key={b}>
            <Card.Image>
              {" "}
              <img src={a.imageUrl} alt={a.name} />
            </Card.Image>
            <Card.Body>
              <Card.Title>
                {" "}
                <h1>{a.name}</h1>
              </Card.Title>
            </Card.Body>
          </Card>
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
