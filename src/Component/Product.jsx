import React, { useState } from 'react';
import "./Product.css";


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
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"1rem",margin:"1rem 1rem"}}>  
      {items.map((val)=>(
        <div className='ProductItems' key={val.id}>
          <div>
            <div className='productdate'>
             <p>{val.date.toLocaleString("en-us",{month:"long"})}</p>
             <p>{val.date.getFullYear()}</p>
             <p>{val.date.toLocaleString("en-us",{day:"2-digit"})}</p>
            </div>
          </div>
          <div className="productitle" style={{marginRight:"10px"}}>
            <p style={{fontSize:"bolder"}}>{val.itemName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product;
