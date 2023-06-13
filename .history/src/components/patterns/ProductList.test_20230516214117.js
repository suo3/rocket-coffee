import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";

describe("Product listing component", () => {
    it("should render a list of products", () => {
      render(<ProductList />);

  screen.debug();
 }
});
