import React from 'react';
import './products.css';
import cart from "../../assets/Cart.svg";
import { Link } from "react-router-dom";
import { findCurrencySymbol, findAmount} from "../../constructors/functions"


const Products = (props) => (
  <><div className="products">
    {props.genProps.data.category.products.map((item) => {
      return (
        <Link className='product' key={item.id} to={item.inStock ? `/products/${item.id}` : ""}>
          <img className={item.inStock ? 'prodImage' : "prodImage opacity"} src={item.gallery[0]} alt="Product Image" title="Product Image" />
          <h3>{item.name}</h3>
          <h4>{findCurrencySymbol(item.prices, props.genProps.currencyLabel)} {findAmount(item.prices, props.genProps.currencyLabel)}</h4>
          <div className='cartDiv'>
            <img className='cart' src={cart} alt="Add to Shopping Cart Button" title="Add to Shopping Cart" />
          </div>
          {item.inStock ? '' : <div id='outOfStock'>Out Of Stock</div>}
        </Link>
      );
    })}
  </div>
  <div className={props.openStateManagement ? "pagerOverlay" : ""}></div></>

);

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
