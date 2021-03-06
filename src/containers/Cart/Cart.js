import React, { Component } from 'react';
import Checkout from '../Checkout';
import './Cart.css';

const CURRENCY = 'USD';

export default class Cart extends Component {

  clearCart = () => {
    let cart = this.props.cart;
    // reverse for loop bc we are removing items from the array
    // normal for loop skips even numbered indexes...so we skipped it
    for (let i = cart.length - 1; i >= 0; i -= 1) {
      document.querySelector(`.amount${this.props.cart[i]}`).click();
    }
  };

  render() {
    let cartTotal;

    if (this.props.cart.length === 0) {
      cartTotal = 0
    } else {
      cartTotal = this.props.cartTotal;
    }

    let cartItems = this.props.cart.map((item, index) => {

      return <div key={index} className="cart-items" onClick={() => this.props.removeFromCart(item)}>
              <p>{item}</p>
             </div>
    });

    let amount = this.props.cart.reduce((a,b) => a + b, 0);
    let description = this.props.cart.map((gift, index) => {
      return " $" + gift ;
    })

    return <div className="Cart">

             <div className="item-container">
               <h3>Cart</h3>
               {cartItems}
             </div>

             <div className="cart-info">
               <h3>Total: ${cartTotal}</h3>

               <h4 className="clear-cart" onClick={() => {
                 this.clearCart();
               }}>Clear Cart</h4>

               <Checkout
                name={this.props.campaign}
                description={"Donations of " + description}
                amount={amount * 100}
                currency={CURRENCY}
                token={this.props.token(amount * 100, "Donations of " + description)}
               />
             </div>

           </div>
  }
};
