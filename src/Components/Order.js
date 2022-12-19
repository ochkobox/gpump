import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='itemcart'>
        <img className='itemimg' src={"./Imgs/" + this.props.item.prod_img}/>
        <h2 className='itemname'>{this.props.item.product_name}</h2>
        <b className='itemprice' >{this.props.item.price_btc}</b>
        <b className='itemprice'>{this.props.item.price_ltc}</b>
        <b className='itemprice'>{this.props.item.price_usd}</b>
      </div>
    )
  }
}

export default Order
