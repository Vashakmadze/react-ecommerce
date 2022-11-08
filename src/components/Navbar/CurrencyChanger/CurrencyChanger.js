import React from 'react';
import './CurrencyChanger.css';
import NavItem from './NavItem/NavItem';
import CurrencyChangerMenu from './NavItem/CurrencyChangerMenu/CurrencyChangerMenu'; 

const CurrencyChanger = (props) => (
  
  <div className="CurrencyChanger">
    <ul>
      <NavItem currencySymbol={props.genProps.currencySymbol} arrow={true} dropdownProp={props.dropdownProp}>
          <CurrencyChangerMenu currencies={props.genProps.data.currencies} changeCurrency={props.genProps.changeCurrency} type={"currency"} cartStateManagement={props.cartStateManagement}/>
      </NavItem>  
    </ul>
  </div>
);

CurrencyChanger.propTypes = {};

CurrencyChanger.defaultProps = {};

export default CurrencyChanger;
