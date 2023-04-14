import React from 'react';
import PropTypes from 'prop-types';
import './ProductListItem.css';

export const ProductListItem = ({name, price, imageUrl, onAddToCart}) => {
  return (
   <div className='card'>
    <h2>{name}</h2>
    <img src={imageUrl} alt="" />
    <small> {price}</small>
    <button onClick={onAddToCart}>Add to Cart</button>
   </div>
  )
}

ProductListItem.propTypes = {
name: PropTypes.string,
price: PropTypes.number,
imageUrl: PropTypes.string,
onAddToCart: PropTypes.func.isRequired
}

ProductListItem.defaultProps = {
    name: 'Product',
    price: 0,
    imageUrl: 'https://',
    onAddToCart: undefined
}