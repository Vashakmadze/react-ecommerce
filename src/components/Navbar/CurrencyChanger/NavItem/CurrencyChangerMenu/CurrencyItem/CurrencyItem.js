import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyItem.css';
import {calculateAmount} from "../../../../../../constructors/functions";

const CurrencyItem = (props) => (
    <div href="#" className='menu-item' onClick={() => {props.changeCurrency(props.label); calculateAmount(props.cartStateManagement.cart, props.label, props.cartStateManagement.setTotalValue)}}>
      <div className='label'>{props.symbol} </div> 
      <div className='symbol'>{props.label}</div>  
  </div>
);

CurrencyItem.propTypes = {};

CurrencyItem.defaultProps = {};

export default CurrencyItem;
