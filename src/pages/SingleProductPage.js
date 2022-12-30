import React from "react";
import "./SingleProductPage.css";
import { useParams } from "react-router";
import { TiPlus, TiMinus } from "react-icons/ti";


function SingleProductPage(props) {
  const {cartItems, products, onAdd, onRemove }= props;
  const { productId } = useParams();
  const product = products.find((p) => (p._id) === productId);

  if (!product) return console.log('Error'); // or fallback UI

  const item = cartItems.find((x) => x._id === product._id)

  return (
    <div className="sPage">
       
      <div className="spImgBlock">
      <img className='spImg' src={product.img_url} alt={product.name}/>
      </div>
      <div className="spTwoBlock">
      <h2 className='spName'>{product.name}</h2>
      <p className="spDesc">{product.description}</p>
      <b className="spPrice">{product.price} $</b>
      {item?
      <div className='spQty'>
           <button onClick={() => onRemove(item)} className="spRemove"> <TiMinus className='spIcon'/> </button>
           <span className='p-1'>{item.qty}</span>
           <button onClick={() => onAdd(item)} className="spAdd"> <TiPlus className='spIcon'/> </button>
          </div>
       : [] 
       }
       <button className='SPadd-to-cart' onClick={() => onAdd(product)}>ADD TO CART</button>
      </div>   
    </div>
  )
}

export default SingleProductPage;