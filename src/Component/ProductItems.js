import React from 'react';
import Card from './Card';
import ProductDate from './ProductDate';

const ProductItems = (props) => {
  return (
    <Card>
      <ProductDate date ={props.date}/>
      <div>
        <h2>{props.title}</h2>
      </div>
        
      
    </Card>
  )
}

export default ProductItems;
