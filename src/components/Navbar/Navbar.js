import React from 'react';
import './Navbar.css';
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { changeActive } from "../../constructors/functions"
import CurrencyChanger from './CurrencyChanger/CurrencyChanger';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const Navbar = (props) => (
    <div className="Navbar">
      <div className='left-nav flex-child'>
        <ul className='list'> 
          {props.genProps.data.categories.map((item, index) => {
            return (
              <NavLink
                to={`/${item.name}`} 
                className='link'
                key={index}
                id={item.name}
                onClick={ () => {
                  props.genProps.changeData(item.name);
                  changeActive(item.name);
                }}>{item.name}</NavLink>
            )
          })}
        </ul>
      </div>
      <div className='middle-nav flex-child'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className='right-nav flex-child'>
        <div className='images'>
          <CurrencyChanger genProps={props.genProps} dropdownProp={props.dropdownProp} cartStateManagement={props.cartStateManagement}/>
          <ShoppingCart props={props}/> 
        </div>
      </div>
    </div>  
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
