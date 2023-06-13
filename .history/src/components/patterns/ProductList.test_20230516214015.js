import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";

describe("Product listing component", () => {
  render(<ProductList />);

  screen.debug();
});
