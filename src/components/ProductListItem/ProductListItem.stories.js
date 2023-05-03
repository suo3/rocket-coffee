import React from 'react';
import  {ProductListItem}  from './ProductListItem';


export default {
    title:'ProductListItem', 
    component:ProductListItem, 
    argTypes:{
        backgroundColor:{control:"color"}
    }
};

export const Standard = {
    args: {
        name:"standard Coffee",
        price:2.50,
        onAddToCart:()=>{ return "added to cart"},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100/",
        isSoldOut:false,
        isOnSale:true,
        backgroundColor: "none"
}
}

export const OnSale = {
    args: {
        name:"Pizza",
        price:6.50,
        onAddToCart: ()=>{return "disabled";},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100",
        isSoldOut:false,
        isOnSale:true,
        backgroundColor: '#e8f6ff'
    } 
}
export const SoldOut = {
    args: {
        name:"Rice is out",
        price:2.50,
        onAddToCart: ()=>{return "disabled";},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100",
        isSoldOut:true,
        isOnSale:false,
        backgroundColor: '#e8f6ff'
    } 
}




