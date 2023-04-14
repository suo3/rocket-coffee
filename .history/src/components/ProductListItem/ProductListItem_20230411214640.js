import React from 'react';
import PropTypes from 'prop-types';
import './ProductListItem.css';


export const ProductListItem = ({name, price, imageUrl, onAddToCart, isSoldOut,backgroundColor}) => {
  return (
   <div className='card' style={{backgroundColor: backgroundColor}}>
    <h2>{isSoldOut? name + ' (sold out) ': name}</h2>
    <img src={imageUrl} alt="" />
    <small> {price}</small>
    <button disabled={isSoldOut} onClick={onAddToCart}>Add to Cart</button>
   </div>
  )
}


function Heading({children}) {
  return <h2>{children}</h2>
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
    backgroundColor:null
}