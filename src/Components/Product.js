import './Product.css';
import { TiPlus, TiMinus } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Product (props) {
  const {item, product, onAdd, onRemove} = props;
    return (
      <div className='items' key={product._id}>
        <img className='itemsImg' src={product.img_url} alt={product.name}/>
        <h2 className='itemsName'>{product.name}</h2>
        <b>{product.price} $</b>
        {item ?
          <div className='buttonAR'>
           <button onClick={() => onRemove(item)} className="remove"> <TiMinus className='iconBasket'/> </button>
           <span className='p-1'>{item.qty}</span>
           <button onClick={() => onAdd(item)} className="add"> <TiPlus className='iconBasket'/> </button>
          </div> : 
          <button className='add-to-cart' onClick={() => onAdd(product)}>ADD TO CART</button>
         }
         <Link className='itemsMore' to={`/product/${product._id}`}> More info</Link>
        
        
      </div>
    )
  }

  export default Product;
  

  //"./Imgs/" + 
  //
  //
  //
  //