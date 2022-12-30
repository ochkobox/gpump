import React from "react";
import Product from "../Components/Product";
import './Videocards.css';


function ANTMINER(props) {
  const{cartItems, products, onAdd, onRemove}= props;
 
  
  return (
    <div>

      <div className="productGrid">
      {products
      .filter(product => product.category === "ANTMINER")
      .map((product) => (
      <Product 
          onAdd={onAdd} 
          onRemove={onRemove} 
          item={cartItems.find((x) => x._id === product._id)} 
          key={product._id} 
          product={product}/>
          )
       )
      
      }
      </div>
    </div>
  )
}

export default ANTMINER;