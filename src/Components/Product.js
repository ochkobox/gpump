import './Product.css';
import { TiPlus, TiMinus } from "react-icons/ti";


function Product (props) {
  const {item, product, onAdd, onRemove} = props;
    return (
      <div className='items'>
        <img src={"./Imgs/" + product.img} alt={product.product_name}/>
        <h2>{product.product_name}</h2>
        <b>{product.price_btc} BTC</b>
        <b>{product.price_ltc} LTC</b>
        <b>{product.price_usd} $</b>
        {item ?
          <div>
           <button onClick={() => onRemove(item)} className="remove"> <TiMinus/> </button>
           <span className='p-1'>{item.qty}</span>
           <button onClick={() => onAdd(item)} className="add"> <TiPlus/> </button>
          </div> : 
          <button className='add-to-cart' onClick={() => onAdd(product)}>ADD TO CART</button>
         }
        
        
      </div>
    )
  }

  export default Product;
  

  //"./Imgs/" + 
  //
  //
  //
  //