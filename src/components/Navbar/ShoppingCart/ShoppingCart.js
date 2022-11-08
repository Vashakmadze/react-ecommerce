import React from 'react';
import './ShoppingCart.css';
import CartImage from "../../../assets/Cart.svg";
import CartMenu from './CartMenu/CartMenu';
import {calculateAmount} from "../../../constructors/functions"


const ShoppingCart = (props) => (
  <div className='nav-item' ref={props.props.cartProp.cartRef} onClick={() => calculateAmount(props.props.cartStateManagement.cart, props.props.genProps.currencyLabel, props.props.cartStateManagement.setTotalValue)}>
    <div className='navItemImage' ref={props.props.cartProp.anotherRef}>
      <img src={CartImage} alt="Shopping Cart Icon" title="Shopping Cart Icon"/>
      {props.props.cartStateManagement.cartLength > 0 && <div className='cart-item-count'>{props.props.cartStateManagement.cartLength}</div> }
    </div>
    {props.props.openStateManagement.open && <CartMenu cartStateManagement={props.props.cartStateManagement} openStateManagement={props.props.openStateManagement} genProps={props.props.genProps} cartStates={props.props.cartStates}/>}
  </div>
);

ShoppingCart.propTypes = {};

ShoppingCart.defaultProps = {};

export default ShoppingCart;
