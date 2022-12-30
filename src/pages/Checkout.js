import React from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import "./Checkout.css";
import { useState } from "react";
import axios from "../axios.js";

function Checkout(props) {
    const{cartItems, onAdd, onRemove}= props;
    const itemPriceUsd = (cartItems || []).reduce((price, item) => price + item.qty * item.price, 0);
    const totalPriceUsd = itemPriceUsd ;

    const [input, setInput] = useState({
      cartItems: cartItems,
      phone: '',
      email: '',
      telegram: '',
      signal: '',
      firstname: '',
      lastname: '',
      address: '',
      addressdetails: '',
      company: '',
      country: '',
      city: '',
      postalcode: '',
      totalPriceUsd: itemPriceUsd,
      paymentmethod: ''
    })

    function handleChange(event) {
      const {name, value} = event.target;

      setInput(prevInput => {
        return {
          ...prevInput,
          [name]: value,
        }

      })
    }

    function handleClick(event) {
      event.preventDefault();
      const newOrders = {
        cartItems: cartItems,
        phone: input.phone,
        email: input.email,
        telegram: input.telegram,
        signal: input.signal,
        firstname: input.firstname,
        lastname: input.lastname,
        address: input.address,
        addressdetails: input.addressdetails,
        company: input.company,
        country: input.country,
        city: input.city,
        postalcode: input.postalcode,
        totalPriceUsd: itemPriceUsd,
        paymentmethod: input.paymentmethod
      }

      console.log(input);

      axios.post("/orders/add", newOrders)
           .then( () => {
              setInput("");
           })
           .catch((error) => alert(error.message));
      
    
    localStorage.clear();
    window.location = "/";

      
    };


    return (

      <div className="checkoutPage">
        
        <h2 className="h2Checkout">Checkout page</h2>
        
        <div className="customerInfo">
            <h2>Customer information</h2>
            <form onSubmit={handleClick} className="checkoutForm">
              <label className="checkoutFormL">
                <h3 className="formH3">Contact information</h3>
                <label className="formName">Phone:</label>
                <input onChange={handleChange} type="tel" name="phone" value={input.phone} required={true} pattern="[0-9]+" minlength="6" title="Enter only numbers"/>
                <br></br>
                <label className="formName">Email:</label>
                <input onChange={handleChange} type="email" name="email" value={input.email} required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <br></br>
                <label className="formName">Telegram:</label>
                <input onChange={handleChange} type="text" name="telegram" value={input.telegram} required={true} pattern="@.+" title="@exempel"/>
                <br></br>
                <label className="formName">Signal (optional):</label>
                <input onChange={handleChange} type="text" name="signal" value={input.signal}/>
                <br></br>
                <hr></hr>

                <h3 className="formH3">Shipping address</h3>
                <label className="formName">First Name:</label>
                <input onChange={handleChange} type="text" name="firstname" value={input.firstname} required={true} pattern="[A-Za-z]+"/>
                <br></br>
                <label className="formName">Last Name:</label>
                <input onChange={handleChange} type="text" name="lastname" value={input.lastname} required={true} pattern="[A-Za-z]+"/>
                <br></br>
                <label className="formName">Company (optional):</label>
                <input onChange={handleChange} type="text" name="company" value={input.company}/>
                <br></br>
                <label className="formName">Address:</label>
                <input onChange={handleChange} type="text" name="address" value={input.address} required={true}/>
                <br></br>
                <label className="formName">Apartament, suite, ect. :</label>
                <input onChange={handleChange} type="text" name="addressdetails" value={input.addressdetails} required={true}/>
                <br></br>
                <label className="formName">Country:</label>
                <select onChange={handleChange} className="formSelect" name="country" value={input.country} required={true}>
                  <option className="formSelectOption" value="">Сhoose...</option>
                  <option className="formSelectOption" value="United States">United States</option>
                  <option className="formSelectOption" value="Canada">Canada</option>
                  <option className="formSelectOption" value="Spain">Spain</option>
                  <option className="formSelectOption" value="Germany">Germany</option>
                  <option className="formSelectOption" value="Netherland">Netherland</option>
                  <option className="formSelectOption" value="France">France</option>
                  <option className="formSelectOption" value="Korea">Korea</option>
                  <option className="formSelectOption" value="China">China</option>
                  <option className="formSelectOption" value="Austria">Austria</option>
                  <option className="formSelectOption" value="Australia">Australia</option>
                  <option className="formSelectOption" value="Hong kong">Hong Kong</option>
                </select>
                <br></br>
                <label className="formName">City:</label>
                <input onChange={handleChange} type="text" name="city" value={input.city} required={true} pattern="[A-Za-z]+"/>
                <br></br>
                <label className="formName">Postal code:</label>
                <input onChange={handleChange} type="text" name="postalcode" value={input.postalcode} required={true}/>
                <br></br>
                <hr></hr>

                <label className="formName">Payment method:</label>
                <select onChange={handleChange} className="formSelect" name="paymentmethod" value={input.paymentmethod} required={true}>
                  <option className="formSelectOption" value="">Сhoose...</option>
                  <option className="formSelectOption" value="LITECOIN">LITECOIN</option>
                  <option className="formSelectOption" value="BITCOIN">BITCOIN</option>
                </select>
                </label>
                <br></br>
                <button type="submit" value="submit" className="btForm" >Proceed payment</button> 
            </form>
        </div>
        
        
        <div className="checkoutBasket">
       <h2 className="h2CBasket">Cart</h2>
       {(cartItems || []).length === 0 && <div className="cartEmpty"> No items are added. </div>}
       { Array.isArray(cartItems) ? cartItems.map((item) => (
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
       )) :null}
       {cartItems.length !== 0 && (
        <div className="totalInfoC">
        <hr className="bLine"/>
        <div className="row">
         <div className="totalCol-1">Total Price</div>
         <div className="totalCol-2" onChange={handleChange} name="totalPriceUsd" value={input.totalPriceUsd}>$ {totalPriceUsd.toFixed(2)}</div>
        </div>
        <div className="row">
         <div className="totalCol-1">Shipping Price</div>
         <div className="totalCol-2">FREE</div>
        </div>
        </div>
       )}
      </div>
      </div>
    )
  }

export default Checkout;