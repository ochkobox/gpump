import React from "react";
import Product from "../Components/Product";
import './Videocards.css';




function Videocards(props) {
  const{cartItems, products, onAdd, onRemove}= props;
 
  
  return (
    <div>

      <div className="productGrid">
      {products && products
      .filter(product => product.category === 'VIDEOCARDS')
      .map((product) => (
        <Product 
            onAdd={onAdd} 
            onRemove={onRemove} 
            item={cartItems.find((x) => x._id === product._id)} 
            key={product._id} 
            product={product}>
            </Product>
      ))
      }
      </div>
    </div>
  )
}

export default Videocards;


