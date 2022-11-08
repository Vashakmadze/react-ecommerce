import React from 'react';
import './CartMenuItem.css';
import { findCurrencySymbol, findAmount, removeFromArray, compareObjects, calculateAmount} from "../../../../../constructors/functions";


class CartMenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.product = props.product;
    this.genProps = props.genProps;
    this.cartStates = props.cartStateManagement;
    this.state = { 
      quantity: props.product.quantity,
      props: this.props, 
      genProps: this.genProps, 
      productStates : {
        color: this.product.attributes.color,
        size: this.product.attributes.size,
        capacity: this.product.attributes.capacity,
        usb: this.product.attributes.usb,
        touchid: this.product.attributes.touchid
      }
    };
  }
  
  increaseQuantity = () => {
    this.setState({quantity: this.state.quantity + 1}); // increases state quantity
    this.product.quantity = this.product.quantity + 1; // increases the item quantity in the cart
    calculateAmount(this.cartStates.cart, this.genProps.currencyLabel, this.cartStates.setTotalValue);
  }
  
  decreaseQuantity = () => {
    if(this.product.quantity === 1) {
      this.cartStates.setCart(removeFromArray(this.cartStates.cart, this.product)); 
      this.cartStates.setCartLength(this.cartStates.cart.length);
      console.log("shemovida")
    } else {
      this.setState({quantity: this.state.quantity - 1}); // decreases state quantity
      this.product.quantity = this.product.quantity - 1; // decreases the item quantity in the cart
    }
    calculateAmount(this.cartStates.cart, this.genProps.currencyLabel, this.cartStates.setTotalValue);

  }

// updates values of products from cart
updateValue(product, key, value) {
  //handling poorly set id cases (for example usb     attributes id = "with usb 3 ports" which is nuts)
  if(key === "With USB 3 ports") {
      key = "usb";
  } else if(key === "Touch ID in keyboard") {
      key = "touchid";
  } else {
      key = key;
  }

  this.cartStates.setCart(prevState => {
    const newState = prevState.map(cartProduct => {
      const newAttributes = cartProduct.attributes;
      if(cartProduct.id === product.id && compareObjects(cartProduct, product)) {
        newAttributes[key.toLowerCase()] = value;
        return {...cartProduct, attributes: newAttributes}
      }
      return cartProduct;
    });
    console.log(newState);
    return newState;
  });
};

  render() {
   if(this.product.quantity > 0) {
    return (
      <div className="CartMenuItem">
        <div className='cart-item'>
          <div className='cart-product' key={this.product}>
            <div className='cart-left'>
              <h2 className='cart-product-title'>{this.product.brand}</h2>
              <h2 className='cart-product-title'>{this.product.name}</h2>
              <h2 className='cart-product-price'>{findCurrencySymbol(this.product.prices, this.state.genProps.currencyLabel)} {findAmount(this.product.prices, this.state.genProps.currencyLabel)}</h2>
              {
                this.product.category.map((item, index) =>  {
                  return (
                    <div className='attrGroup' key={"cartitem5" + index}>
                      <h3 key={"cartitem" + index}  className='attrTextCart'>{item.name}:</h3>
                      <div key={"cartitem1" + index} className={item.type + "cart"}>
                      {
                        item.items.map((attribute) => {
                          if(item.name === "Color") {
                            return (
                              <div
                                key={attribute.value}
                                className={this.state.productStates.color === attribute.value ? item.type + "attrcart" + " active" : item.type + "attrcart"}
                                onClick={() => {this.setState(prevState => ({productStates: {...prevState.productStates, color: attribute.value}})); this.updateValue(this.product, item.name, attribute.value)}}
                                style={{backgroundColor: attribute.value}}>
                              </div>
                            );
                          } else if(item.name === "Capacity") {
                            return (
                              <div
                                key={attribute.value}
                                className={this.state.productStates.capacity === attribute.value ? item.type + "attrcart" + " active" : item.type + "attrcart"}
                                onClick={() => {this.setState(prevState => ({productStates: {...prevState.productStates, capacity: attribute.value}})); this.updateValue(this.product, item.name, attribute.value)}}>{attribute.displayValue}</div>
                            );
                          } else if(item.name === "Size") {
                              return (
                                <div
                                  key={attribute.value}
                                  className={this.state.productStates.size === attribute.value ? item.type + "attrcart" + " active" : item.type + "attrcart"}
                                  onClick={() => {this.setState(prevState => ({productStates: {...prevState.productStates, size: attribute.value}})); this.updateValue(this.product, item.name, attribute.value)}}>{attribute.displayValue}</div>
                              );
                          }
                          else if(item.name === "With USB 3 ports") {
                              return (
                                <div
                                  key={attribute.value}
                                  className={this.state.productStates.usb === attribute.value ? item.type + "attrcart" + " active" : item.type + "attrcart"}
                                  onClick={() => {this.setState(prevState => ({productStates: {...prevState.productStates, usb: attribute.value}})); this.updateValue(this.product, item.name, attribute.value)}}>{attribute.displayValue}</div>
                              );
                          } else {
                              return (
                                <div key={attribute.value}
                                  className={this.state.productStates.touchid === attribute.value ? item.type + "attrcart" + " active" : item.type + "attrcart"}
                                  onClick={() => {this.setState(prevState => ({productStates: {...prevState.productStates, touchid: attribute.value}})); this.updateValue(this.product, item.name, attribute.value)}}>{attribute.displayValue}</div>
                              );
                          }
                        })
                      }
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div className='cart-middle'>
              <div className='quantity-increase' onClick={() => this.increaseQuantity()}>+</div>
              <h2>{this.product.quantity}</h2>
              <div className='quantity-decrease' onClick={() => this.decreaseQuantity()}>-</div>
            </div>
            <div className='cart-right'>
              <img src={this.product.image[0]} alt="Product Media"/>
            </div>
          </div>
        </div>
      </div>
    );
    
   }
  }
} 

CartMenuItem.propTypes = {};

CartMenuItem.defaultProps = {};

export default CartMenuItem;
