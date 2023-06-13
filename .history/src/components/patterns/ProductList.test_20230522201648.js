import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";
const data = [
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
];
describe("Product listing component", () => {
  it("should render a list of products", () => {
    render(<ProductList data={data} />);

    screen.debug();
  });
});
