import { conforms } from 'lodash';
import {useParams, useNavigate} from 'react';
import { attributes } from './constructors';


// gets product currency
export function findCurrencySymbol(prices, currency) {
    let currencyObject = prices.find(o => o.currency.label === currency);
    return currencyObject.currency.symbol;
}

// finds prodcut price amount
export function findAmount(prices, currency) {
    let currencyObject = prices.find(o => o.currency.label === currency);
    return currencyObject.amount;
}

// generates random id
export function randomID() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

// comparse two objects
export function compareObjects(objectOne, objectTwo) { // compares two products objects
    let tempOne = Object.assign({}, objectOne);// creating a shallow copy of products obkects
    let tempTwo = Object.assign({}, objectTwo); 

    delete tempOne.quantity; // removing quantity values from shallow copies
    delete tempTwo.quantity; 

    delete tempOne.id;
    delete tempTwo.id;

    const stringONe = JSON.stringify(tempOne); //turnign them into strings
    const StringTwo = JSON.stringify(tempTwo);

    return stringONe === StringTwo; // comparing strings
}

export function compareObjectsSecondVariant(objectOne, objectTwo) {
    let tempOne = Object.assign({}, objectOne);// creating a shallow copy of products obkects
    let tempTwo = Object.assign({}, objectTwo); 
    
    delete tempOne.quantity; // removing quantity values from shallow copies
    delete tempTwo.quantity; 

    const stringONe = JSON.stringify(tempOne); //turnign them into strings
    const StringTwo = JSON.stringify(tempTwo);

    return stringONe === StringTwo; // comparing strings
}

// handles category change
export function changeActive(category) {
    if(category === "all") {
      document.getElementById(category).classList.add('active');
      document.getElementById("clothes").classList.remove('active');
      document.getElementById("tech").classList.remove('active');
    }
    else if(category === "clothes") {
      document.getElementById(category).classList.add('active');
      document.getElementById("tech").classList.remove('active');
      document.getElementById("all").classList.remove('active');
  
    }
    else {
      document.getElementById(category).classList.add('active');
      document.getElementById("clothes").classList.remove('active');
      document.getElementById("all").classList.remove('active');
  
    }
  }

export function calculateAmount(cart, currencyLabel, setState) {
    let totalAll = 0;
    cart.map((item) => {
        let price = findAmount(item.prices, currencyLabel);
        let quantity = item.quantity;
        let total = price * quantity;
        totalAll = totalAll + total;
    })
    setState(totalAll);
}

export function itemExists(product, props) { // checks if item exists in cart
    return props.cartStateManagement.cart.some((item) => {
        return compareObjects(item, product);
    })
}

export function addToCart(props, product) {
    if(itemExists(product, props)) { // if the product is the same and matches attributes
        const newState = props.cartStateManagement.cart.map(productObj => {
            if (compareObjects(productObj, product)) {
              return {...productObj, quantity: productObj.quantity + 1}; // increases quantity
            } else {
                return productObj;
            }
        });
        props.cartStateManagement.setCart(newState);
    } else {
        product.id = product.id + randomID();
        props.cartStateManagement.setCart([...props.cartStateManagement.cart, product]);
        props.cartStateManagement.setCartLength(props.cartStateManagement.cartLength + 1);
    }
}


export function removeFromArray(array, value) {
    const idx = array.findIndex(object => {
        return object.id === value.id;
      });
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}


