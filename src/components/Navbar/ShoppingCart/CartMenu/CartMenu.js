import React from 'react';
import './CartMenu.css';
import CartMenuItem from './CartMenuItem/CartMenuItem';
import { NavLink } from "react-router-dom";

const CartMenu = (props) => (
  <div className='dropdown-cart'>
    <h1 className='cart-header'>My bag, <span>{props.cartStateManagement.cart.length} items</span></h1>
    <div className='cart-products'>
      {props.cartStateManagement.cart.map((item) => {
        return (
          <CartMenuItem product={item} key={item.id} cartStateManagement={props.cartStateManagement} genProps={props.genProps}/>
        );})}
    </div>
    <div className={props.cartStateManagement.cart.length > 0 ? " " : "none"}>
      <div className='cart-footer'>
        <h1 className='total-text'>Total</h1>
        <h1 className='total-amount'>{props.genProps.currencySymbol}{props.cartStateManagement.totalValue}</h1>
      </div>
      <div className='cart-buttons'>
        <NavLink to={`/cart`} >
          <div className='view-bag'>View Bag</div>
        </NavLink>
        <NavLink to={'/checkout'}>
          <div className='check-out'>Check Out</div>
        </NavLink>
      </div>
    </div>

  </div>
);

CartMenu.propTypes = {};

CartMenu.defaultProps = {};

export default CartMenu;
