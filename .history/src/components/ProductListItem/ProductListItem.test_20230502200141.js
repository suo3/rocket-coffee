import { render } from "@testing-library/react"
import { ProductListItem } from "./ProductListItem"

it('shows on sale label when isOnSale', () => {
    const {getByText} = render(<ProductListItem name="Mocha" price={3.50} imageUrl="..." isOnSale />);
})