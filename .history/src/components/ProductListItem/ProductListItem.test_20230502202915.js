import { render, fireEvent } from "@testing-library/react"
import { ProductListItem } from "./ProductListItem"

it('shows on sale label when isOnSale', () => {
    const {getByText} = render(<ProductListItem name="Mocha" price={3.50} imageUrl="..." isOnSale />);
    expect(getByText(`(On Sale)`)).toBeInTheDocument();
});

it('disables the button when disabled', () => {
    const {getByText} = render(<ProductListItem name="Mocha" price={3.50} isSoldOut />);
    expect(getByText(`(Disabled)`)).toHaveAttribute('disabled');
});

it('calls callback when button Add to Cart pressed', () => {
    const onAddToCart = jest.fn();

    const {getByText} = render(<ProductListItem name="Mocha" price={3.50} imageUrl="..." onAddToCart={onAddToCart} />);
    fireEvent.click(getByText(`Add to Cart`));
    expect(onAddToCart).toHaveBeenCalled()
});