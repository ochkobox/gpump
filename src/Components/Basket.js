import "../Styles/main.css";
import { IoBagCheckOutline } from "react-icons/io5";
import { TiPlus, TiMinus } from "react-icons/ti";

function Basket(props) {
    const{cartItems, onAdd, onRemove}= props;
    const itemPriceUsd = cartItems.reduce((price, item) => price + item.qty * item.price_usd, 0);
    const totalPriceUsd = itemPriceUsd ;
    const itemPriceBtc = cartItems.reduce((price, item) => price + item.qty * item.price_btc, 0);
    const totalPriceBtc = itemPriceBtc ;
    const itemPriceLtc = cartItems.reduce((price, item) => price + item.qty * item.price_ltc, 0);
    const totalPriceLtc = itemPriceLtc ;
    return (
      <div className="basket">
       <h2 className="h2Basket">Cart Items</h2>
       {cartItems.length === 0 && <div className="cartEmpty"> No items are added. </div>}
       {cartItems.map((item) => (
        <div key={item._id} className="basketRow">
            <div className="col-1Name">{item.product_name}</div>
            <div className="col-1">
                <button onClick={() => onRemove(item)} className="remove"> 
                  <TiMinus/>
                </button>
                {item.qty} 
                <button onClick={() => onAdd(item)} className="add"> 
                  <TiPlus/> 
                </button>
            </div>
            <div className="col-1Text">
              $ {item.price_usd.toFixed(2)}  BTC {item.price_btc.toFixed(4)} LTC {item.price_ltc.toFixed(2)}
            </div>
        </div>
       ))}
       {cartItems.length !== 0 && (
        <div className="totalInfo">
        <hr className="bLine"/>
        <div className="row">
         <div className="totalCol-1">Total Price</div>
         <div className="totalCol-2">$ {totalPriceUsd.toFixed(2)}</div>
         <div className="totalCol-2">BTC {totalPriceBtc.toFixed(4)}</div>
         <div className="totalCol-2">LTC {totalPriceLtc.toFixed(2)}</div>
        </div>
        <div className="row">
         <div className="totalCol-1">Shipping Price</div>
         <div className="totalCol-2">FREE</div>
        </div>
       
        <div>
        <button className="checkout" onClick={() => alert('Implement CHECKOUT!')}>
            Checkout <IoBagCheckOutline className="checkoutIcon"/>
        </button>    
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
        