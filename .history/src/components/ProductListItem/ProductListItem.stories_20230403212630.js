import React from 'react';
import  ProductListItem  from './ProductListItem';


export default {title:'ProductListItem'};

export const standard = () => <ProductListItem name="Standard Coffee" price="2.50" onAddToCart={()=> {
    console.log("CLICKED")
}} />