import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.css';
import up from '../../../../assets/up.svg';
import down from '../../../../assets/down.svg'

const NavItem = (props) => (
    <li className='nav-item' onClick={() => props.dropdownProp.setOpen(!props.dropdownProp.open)} ref={props.dropdownProp.ref}>
      <div className='navItemText' >{props.currencySymbol}</div>
      {props.arrow && <img className='arrow' src={`${props.dropdownProp.open ? up : down}`} />}
      {props.dropdownProp.open && props.children}
    </li>
);


NavItem.propTypes = {};

NavItem.defaultProps = {};

export default NavItem;
