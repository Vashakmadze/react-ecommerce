import React from 'react';
import './products.css';
import cart from "../../assets/Cart.svg";
import { Link } from "react-router-dom";
import { findCurrencySymbol, findAmount, addToCart} from "../../constructors/functions"
import { attributes, configuredProduct } from '../../constructors/constructors';

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
      <div className="products">
        {this.props.genProps.data.category.products.map((item) => {
          let att = new attributes(null, null, null, null, null);
          let product = new configuredProduct(item.brand, item.gallery, item.id, item.name, item.prices, att, 1, item.category);
          return (
            <Link className='product' key={item.id} to={item.inStock ? `/products/${item.id}` : ""}>
              <img className={item.inStock ? 'prodImage' : "prodImage opacity"} src={item.gallery[0]} alt="Product Image" title="Product Image" />
              <h3>{item.name}</h3>
              <h4>{findCurrencySymbol(item.prices, this.props.genProps.currencyLabel)} {findAmount(item.prices, this.props.genProps.currencyLabel)}</h4>
              {item.inStock ? '' : <div id='outOfStock'>Out Of Stock</div>}
            </Link>
          );
        })}
      </div><div className={this.props.openStateManagement ? "pagerOverlay" : ""}></div>
      </>
    )
  }

};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
