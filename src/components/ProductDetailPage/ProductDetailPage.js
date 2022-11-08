import React, { useState } from 'react';
import "./ProductDetailPage.css";
import { configuredProduct, attributes } from "../../constructors/constructors";
import { findCurrencySymbol, findAmount, addToCart} from "../../constructors/functions";

class ProductDetailPage extends React.Component {

    constructor(props) {
        
        super(props);
        this.id = window.location.href.split('/')[4]; // get the right product
        this.product = props.genProps.data.category.products.find(o => o.id === this.id);
        this.state = {
            image: this.product.gallery[0],     // handling the image clicks
            size: null,    // size state
            color: null,     // color state
            capacity: null,     // capacity state
            usb: null,     // usb state
            touchid: null     // touchID state
        }
        this.props = props;
    } 

    componentDidMount() {
        this.att = new attributes(this.state.size, this.state.capacity, this.state.color, this.state.usb, this.state.touchid);
        this.pro = new configuredProduct(this.product.brand, this.product.gallery, this.product.id, this.product.name, this.product.prices, this.att, 1, this.product.category);
    }
    
    componentDidUpdate() {
        this.att = new attributes(this.state.size, this.state.capacity, this.state.color, this.state.usb, this.state.touchid);
        this.pro = new configuredProduct(this.product.brand, this.product.gallery, this.product.id, this.product.name, this.product.prices, this.att, 1, this.product.category);
    }

    render() {
        return (
            <>
            <div className="container">
                <div className='productImageList'>
                    {
                        this.product.gallery.map((item, index) => {
                            return (
                                <img key={"1" + index} src={item} onClick={() => this.setState({image: item})}/>
                            );
                        })
                    }
                </div>
                <div className='productImageDiv'>
                    <img src={this.state.image} alt="Product Media"/>    
                </div>
                <div className='attributesSelect'>
                    <div className='productNames'>
                        <h1 className='productName'>{this.product.name}</h1>
                        <h2 className='productTitle'>{this.product.brand}</h2>
                    </div>
                    {
                        this.product.category.map((item, index) => {
                            return (
                                <div className='attrGroup' key={"2" + index}> 
                                    <h3 key={"3" + index}  className='attrText'>{item.name}:</h3>
                                    <div key={"4" + index} className={item.type}>
                                        {
                                            item.items.map((attribute) => {
                                                if(item.name === "Color") {
                                                    return (
                                                        <div
                                                            key={attribute.value}
                                                            className={this.state.color === attribute.value ? item.type + "attr" + " active" : item.type + "attr"}
                                                            onClick={() => this.setState(prevState => ({...prevState, color: attribute.value}))}
                                                            style={{backgroundColor: attribute.value}}>
                                                        </div>
                                                    );
                                                } else if(item.name === "Capacity") {
                                                    return (
                                                        <div
                                                            key={attribute.value}
                                                            className={this.state.capacity === attribute.value ? item.type + "attr" + " active" : item.type + "attr"}
                                                            onClick={() => this.setState({capacity: attribute.value})}>{attribute.displayValue}</div>
                                                    );
                                                } else if(item.name === "Size") {
                                                    return (
                                                        <div
                                                            key={attribute.value}
                                                            className={this.state.size === attribute.value ? item.type + "attr" + " active" : item.type + "attr"}
                                                            onClick={() => this.setState({size: attribute.value})}>{attribute.displayValue}</div>
                                                    );
                                                } else if(item.name === "With USB 3 ports") {
                                                    return (
                                                        <div
                                                        key={attribute.value}
                                                        className={this.state.usb === attribute.value ? item.type + "attr" + " active" : item.type + "attr"}
                                                        onClick={() => this.setState({usb : attribute.value})}>{attribute.displayValue}</div>
                                                    );
                                                } else if(item.name === "Touch ID in keyboard") {
                                                    return (
                                                        <div key={attribute.value}
                                                        className={this.state.touchid === attribute.value ? item.type + "attr" + " active" : item.type + "attr"}
                                                        onClick={() => this.setState({touchid : attribute.value})}>{attribute.displayValue}</div>
                                                    );
                                                }
                                            })
                                        }
                                    </div>   
                                </div>
                            );
                        })
                    }
                    <div className='priceDiv'> 
                        <h3 className='attrText'>PRICE:</h3>
                        <h3 className='attrText'>{findCurrencySymbol(this.product.prices, this.props.genProps.currencyLabel)} {findAmount(this.product.prices, this.props.genProps.currencyLabel)}</h3>
                    </div>
                    <button className='addToCartBtn' onClick={() => addToCart(this.props, this.pro)}>ADD TO CART</button>
                    <p className='aboutProductText'>{this.product.description.replace(/<[^>]+>/g, '')    }</p>
                </div>
            </div>
            <div className={this.props.openStateManagement.open ? "pagerOverlay" : ""}></div>
            </>
        )
    }
}





export default ProductDetailPage;