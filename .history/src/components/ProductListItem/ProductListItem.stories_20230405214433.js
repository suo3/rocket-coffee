import React from 'react';
import {action} from '@storybook/addon-actions';
import  {ProductListItem}  from './ProductListItem';


export default {
    title:'ProductListItem', 
    component:ProductListItem, 
    args:{
        name:"Standard Coffee"
    }
};

export const standard = () => 
<ProductListItem 
name="Standard Coffee" 
price="2.50" 
onAddToCart={action("Add to cart clicked")} 
imageUrl="https://source.unsplash.com/tNALoIZhqVM/200x100/" 
/>

