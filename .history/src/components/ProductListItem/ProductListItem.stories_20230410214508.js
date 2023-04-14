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
        name:"Standard Coffee"
    }
};

export const Standard = {
    args: {
        name:"standard Coffee",
        price:"2.50",
        onAddToCart:()=>{ return "added to cart"},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100/",
        isSoldOut:false
}
}

export const SoldOut = {
    args: {
        name:"Rice is out",
        price:"300",
        onAddToCart: ()=>{return "disabled";},
        imageUrl:"https://source.unsplash.com/tNALoIZhqVM/200x100",
        isSoldOut:true
    }
}



/* export const standard = () => 
<ProductListItem 
name="Standard Coffee" 
price="2.50" 
onAddToCart={action("Add to cart clicked")} 
imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/" 
/> */

