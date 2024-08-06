import React from 'react';
import ProductItems from './ProductItems';
import Card from './Card';

const Product = (props) => {
  

  return (
    <Card>
      <ProductItems 
        title = {props.item[0].itemName}
        amount = {props.item[0].amount}
        date = {props.item[0].date}/>

      <ProductItems 
        title = {props.item[1].itemName}
        amount = {props.item[1].amount}
        date = {props.item[1].date}
      />
      <ProductItems 
        title = {props.item[2].itemName}
        amount = {props.item[2].amount}
        date = {props.item[2].date}
      />
      <ProductItems 
        title = {props.item[3].itemName}
        amount = {props.item[3].amount}
        date = {props.item[3].date}
      />  
    </Card>
  )
}

export default Product;
