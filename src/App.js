import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/products/products"
import { useEffect, useState, useRef } from 'react';
import { useQuery, useSubscription } from "@apollo/client";
import { GET_TECH_CAT } from "./gql/Queries";
import { GET_CLOTHES_CAT } from "./gql/Queries";
import { GET_ALL_CAT } from "./gql/Queries";  
import { Routes, Route, Navigate} from "react-router-dom"
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import {calculateAmount} from "./constructors/functions";
import Bag from "./components/Bag/Bag";


function App() {


  //state for cart
  const [open, setOpen] = useState(false);

  // handling outside clicks cart
  const cartRef = useRef(null);
  const anotherRef = useRef(null);

  // handling outise click cart
  useEffect(() => {
      document.addEventListener("click", handleClickOutsideCart, true);
  }, []);

  const handleClickOutsideCart = (e) => {
      if(!cartRef.current.contains(e.target)) {
        setOpen(false);
      } else if(anotherRef.current.contains(e.target)) {
        setOpen(!open);
      }
  }

  const cartProp = {
    open: open,
    setOpen: setOpen,
    cartRef: cartRef,
    anotherRef: anotherRef
  }

  // state for total amount
  const [totalValue, setTotalValue] = useState();

  // handling outside clicks of dropdown menu currency
  const [openCurrency, setOpenCurrency] = useState(false);
  const currencyMenuRef = useRef(null);

  // grouping data for dropdown currency
  const dropdownProp = {
    open : openCurrency,
    setOpen : setOpenCurrency,
    ref : currencyMenuRef
  }

  // handling outise click
  useEffect(() => {
      document.addEventListener("click", handleClickOutside, true)
  }, []);

  const handleClickOutside = (e) => {
      if(!currencyMenuRef.current.contains(e.target)) {
        setOpenCurrency(false);
      }
  }

  // initializing array for products in cart
  const [cartState, setCartState] = useState([]);

  // numebr of products in cart state 
  const [cartLength, setCartLength] = useState(0); 
  
  // initializing currency state
  const [currency, setCurrency] = useState("USD");

  //handling data change from navbar
  const [catData, setCatData] = useState("all");
  let queryForDataCat = GET_ALL_CAT 
  if(catData == "all") {
    queryForDataCat = GET_ALL_CAT
  } else if(catData == "clothes") {
    queryForDataCat = GET_CLOTHES_CAT
  } else {
    queryForDataCat = GET_TECH_CAT
  }
  
  const { data, loading, error } = useQuery(queryForDataCat);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  // handling currency change
  let currencyObject = data.currencies.find(o => o.label === currency);
 
  // grouping cart state for props
  const cartStateManagement = {
    cart: cartState,
    setCart: setCartState,
    cartLength: cartLength,
    setCartLength: setCartLength,
    totalValue: totalValue,
    setTotalValue: setTotalValue
  }

  // grouping open state for props
  const openStateManagement = {
    open: open, 
    setOpen: setOpen
  }

  // grouping general use props
  const genProps = {
    data : data,
    changeData: catData => setCatData(catData),
    changeCurrency: currency => setCurrency(currency),
    currencySymbol: currencyObject.symbol,
    currencyLabel: currencyObject.label,
  }
  
  return (
    <div className="App">
      <Navbar genProps={genProps} openStateManagement={openStateManagement} cartStateManagement={cartStateManagement} dropdownProp={dropdownProp} cartProp={cartProp}/>
      <Routes>
        <Route index path="/:name" element={<Products genProps={genProps} openStateManagement={open}/>}></Route>
        <Route path="/cart" element={<Bag openStateManagement={openStateManagement} cartStateManagement={cartStateManagement} genProps={genProps}/>}></Route>
        <Route path="/products/:id" element={<ProductDetailPage genProps={genProps} openStateManagement={openStateManagement} cartStateManagement={cartStateManagement}/>}></Route>
        <Route path="*" element={<Navigate to="/all" replace />} />
      </Routes>
      </div>    
  );
}

export default App;
