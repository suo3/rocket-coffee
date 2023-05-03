import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import './ProductListItem.css';


const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut,isOnSale,backgroundColor}) => {
  return (
   <Card highlight={isOnSale} backgroundColor={backgroundColor}>
    <Heading>
      {name} {isOnSale && "(On Sale"}
    </Heading>
    <img src={imageUrl} alt="" />
    <Text>{price}</Text>
    <Button onClick={onAddToCart} disabled={isSoldOut}>
      {isSoldOut ?"Sold out":"Add to Cart"}
    </Button>
    </Card>
  )
}


ProductListItem.propTypes = {
name: PropTypes.string,
price: PropTypes.number,
imageUrl: PropTypes.string,
onAddToCart: PropTypes.func.isRequired,
isSoldOut:PropTypes.bool,
isOnSale: PropTypes.bool, 
backgroundColor: PropTypes.string
}

ProductListItem.defaultProps = {
    name: 'Product',
    price: 0,
    imageUrl: 'https://',
    onAddToCart: undefined,
    isOnSale:false,
    isSoldOut:false,
    backgroundColor:null
}

export default ProductListItem;