import React from 'react';
import PropTypes from 'prop-types';
import './ProductListItem.css';

export const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut,backgroundColor}) => {
  return (
   <div className='card' style={{backgroundColor: backgroundColor}}>
    <h2>{name}</h2>
    <img src={imageUrl} alt="" />
    <small> {price}</small>
    <button disabled={isSoldOut} onClick={onAddToCart}>Add to Cart</button>
   </div>
  )
}

ProductListItem.propTypes = {
name: PropTypes.string,
price: PropTypes.number,
imageUrl: PropTypes.string,
onAddToCart: PropTypes.func.isRequired,
isSoldOut:PropTypes.bool,
backgroundColor: PropTypes.string
}

ProductListItem.defaultProps = {
    name: 'Product',
    price: 0,
    imageUrl: 'https://',
    onAddToCart: undefined,
    isSoldOut:false,
    backgroundColor:"#e8f6ff"
}