import React, { useState } from 'react';


const Product = () => {
 const [items , setItems] = useState([
    {
      id : 1,
      itemName : "Wheatflour",
      amount : 400,
      date : new Date(2024 ,7, 15)
    },
    {
      id : 2,
      itemName : "Wheatflour",
      amount : 500,
      date : new Date(2024 ,2, 16)
    },
    {
      id : 3,
      itemName : "Wheatflour",
      amount : 450,
      date : new Date(2024 ,2, 17)
    },
    {
      id : 4,
      itemName : "Wheatflour",
      amount : 430,
      date : new Date(2024 ,2, 18)
    }
 ]);



  return (
    <div className="ProductItems">  
      {items.map((val)=>(
        <div key={val.id}>
          <div className='productdate'>
           <p>{val.date.toLocaleString("en-us",{month:"long"})}</p>
           <p>{val.date.getFullYear()}</p>
           <p>{val.date.toLocaleString("en-us",{day:"2-digit"})}</p>
          </div>
          <div className="productitle">
            <p>{val.itemName}</p>
            <p>{val.amount}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product;
