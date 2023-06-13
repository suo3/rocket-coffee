import { render, fireEvent } from "@testing-library/react";
import { OnSale, SoldOut, Standard } from "./ProductListItem.stories";

describe("ProductListItem", () => {
  it("shows on sale label when isOnSale is true", () => {
    const { getByText } = render(<OnSale isOnSale={true} />);
    expect(getByText("(On Sale)")).toBeInTheDocument();
  });

  it("disables the button when disabled is true", () => {
    const { getByText } = render(<SoldOut disabled={true} />);
    expect(getByText("(Disabled)")).toBeDisabled();
  });

  it("calls onAddToCart when Add to Cart button is pressed", () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(<Standard onAddToCart={onAddToCart} />);

    fireEvent.click(getByText("Add to Cart"));

    expect(onAddToCart).toHaveBeenCalled();
  });
});

describe("true is truthy and false is falsey", () => {
  it("true is truthy", () => {
    expect(true).toBe(true);
  });
});
