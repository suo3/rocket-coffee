import React from 'react';
import {action} from '@storybook/addon-actions';
import  {ProductListItem}  from './ProductListItem';


export default {
    title:'ProductListItem', 
    component:ProductListItem, 
    args: {
        name:"free"
    },
    argTypes:{
        name:"Standard Coffee",
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
        isOnSale:true
        //backgroundColor: {control:'color'}
}
}

export const SoldOut = {
    args: {
        name:"Rice is out",
        price:300,
        onAddToCart: ()=>{return "disabled";},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100",
        isSoldOut:true,
        isOnSale:false,
        backgroundColor: '#e8f6ff'
    } 
}




