import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyChangerMenu.css';
import CurrencyItem from './CurrencyItem/CurrencyItem';
import { randomID } from '../../../../../constructors/functions';

const CurrencyChangerMenu = (props) => (
  <div className="dropdown">
      {props.currencies.map((item, index) => {
        return (
          <>
          <CurrencyItem key={item.label + index} label={item.label} symbol={item.symbol} changeCurrency={props.changeCurrency} cartStateManagement={props.cartStateManagement}/>
          </>
        );
        })}
  </div>
);

CurrencyChangerMenu.propTypes = {};

CurrencyChangerMenu.defaultProps = {};

export default CurrencyChangerMenu;
