import React from 'react';
import './Bag.css';
import BagItem from './BagItem/BagItem';
import { compareObjects, randomID } from '../../constructors/functions';

class Bag extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    return (
      <>
      <div className="Bag">
        <h1 className='bag-title'>Cart</h1>
        <React.Fragment>
          {this.props.cartStateManagement.cart.map((item) => {
            return (
              <BagItem product={item} genProps={this.props.genProps} cartStateManagement={this.props.cartStateManagement} key={item.id}/>
            );
          })}
        </React.Fragment>
        <div className={this.props.cartStateManagement.cart.length > 0 ? `checkout-bag` : "none"}>
          <h1 className='tax-checkout'>Tax 21%: <span>{this.props.genProps.currencySymbol}{((this.props.cartStateManagement.totalValue * 100) / 21)}</span></h1>
          <h1 className='quantity-checkout'>Quantity:<span> {this.props.cartStateManagement.cartLength}</span></h1>
          <h1 className='total-checkout'>Total:<span> {this.props.genProps.currencySymbol}{this.props.cartStateManagement.totalValue}</span></h1>
          <div className='order-bag'>ORDER</div>
        </div>
      </div><div className={this.props.openStateManagement.open ? "pagerOverlay" : ""}></div>
      </>
    )
  }

}

Bag.propTypes = {};

Bag.defaultProps = {};

export default Bag;
