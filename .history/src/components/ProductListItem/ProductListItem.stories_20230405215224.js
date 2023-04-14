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

export const standard = () => 
<ProductListItem />

