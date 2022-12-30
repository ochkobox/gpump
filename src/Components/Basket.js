import "../Styles/main.css";
import { IoBagCheckOutline } from "react-icons/io5";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Basket(props) {
    const{cartItems, onAdd, onRemove}= props;
    const itemPriceUsd = cartItems.reduce((price, item) => price + item.qty * item.price, 0);
    const totalPriceUsd = itemPriceUsd ;

    return (
      <div className="basket">
       <h2 className="h2Basket">Cart Items</h2>
       {cartItems.length === 0 && <div className="cartEmpty"> No items are added. </div>}
       {cartItems.map((item) => (
        <div key={item._id} className="basketRow">
            <div className="col-1Name">{item.name}</div>
            <div className="col-1Qty">
                <button onClick={() => onRemove(item)} className="remove"> 
                  <TiMinus className='iconBasket'/>
                </button>
                {item.qty} 
                <button onClick={() => onAdd(item)} className="add"> 
                  <TiPlus className='iconBasket'/> 
                </button>
            </div>
            <div className="col-1Text">
              $ {item.price.toFixed(2)}
            </div>
        </div>
       ))}
       {cartItems.length !== 0 && (
        <div className="totalInfo">
        <hr className="bLine"/>
        <div className="row">
         <div className="totalCol-1">Total Price</div>
         <div className="totalCol-2">$ {totalPriceUsd.toFixed(2)}</div>
        </div>
        <div className="row">
         <div className="totalCol-1">Shipping Price</div>
         <div className="totalCol-2">FREE</div>
        </div>
       
        <div>
        <Link className="checkout"  to="/checkout">
            Checkout <IoBagCheckOutline className="checkoutIcon"/>
        </Link>    
        </div>

        </div>
       )}
      </div>
    )
  }
  
  export default Basket;
  

  //Добавить Доставку (если надо)
  //const shippingPrice = itemPrice > 50 ? 0 : 20;
  //

  //Прибавить к итоговой сумме НДС и Доставку (если надо)
  //+ taxPrice + shippingPrice

  //Добавить НДС (если надо)
  //const taxPrice = itemPrice * 0.20;


  //Вывод информации в корзину
  /* <div className="row">
     <div className="totalCol-1">Tax Price</div>
     <div className="totalCol-1">${taxPrice.toFixed(2)}</div>
     </div>

     <div className="row">
      <div className="totalCol-1">Item Price</div>
      <div className="totalCol-1">${itemPriceUsd.toFixed(2)}</div>
     </div>

     <div className="row">
      <div className="totalCol-1">Shipping Price</div>
      <div className="totalCol-2">${shippingPrice.toFixed(2)}</div>
     </div>
  */
        