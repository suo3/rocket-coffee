import { render, fireEvent, screen } from "@testing-library/react";
import { OnSale, SoldOut, Standard } from "./ProductListItem.stories";
import { ProductListItem } from "./ProductListItem";

describe("ProductListItem", () => {
  /*  it("shows on sale label when isOnSale is true", () => {
    render(
      <OnSale
        isOnSale={true}
        isSoldOut={false}
        name="Fred"
        price={3}
        imageUrl="dad"
      />
    );
    
    expect(screen.getByText("(On Sale)")).toBeInTheDocument();
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
  }); */
});

describe("product list items", () => {
  it("should return a list of products", () => {
    render(<ProductListItem />);
  });
});

describe("true is truthy and false is falsey", () => {
  it("true is truthy", () => {
    expect(true).toBe(true);
  });
  it("false is falsy", () => {
    expect(false).toBe(false);
  });
});
