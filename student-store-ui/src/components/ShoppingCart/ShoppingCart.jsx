import * as React from "react"
import "./ShoppingCart.css"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'

export default function ShoppingCart({sidebarOpen, shoppingCart, products}){
console.log("PRODUCTS: ", products)
    if (sidebarOpen){
        console.log(shoppingCart)
        if (shoppingCart.length === 0){
            // {// console.log("SHOPPING CART EMPTY")}
            return <div className="notification">No items added to cart yet. Start shopping now!</div>
        } else {
            // console.log("SHOPPING CART ITEM ADDED")}

            // for loop
            // {shoppingCart?.map((product, index) => {

            // })}
            return (
                <div className="CartTable">
                <div className="header">
                <div className="header-row">
                    <span className="flex-2">Name</span>
                    <span className="center">Quantity</span>
                    <span className="center">Unit Price</span>
                    <span className="center">Cost</span>
                </div>
                <div className="product-row">

                    {
                        shoppingCart.map( 
                            item => <div> {products.filter((product) => item.itemId === product.id)[0].name} </div>
                        )
                    }
                    {
                       shoppingCart.map( item => <span className="center cart-product-quantity">{item.quantity}</span>)
                    }
                    {
                        shoppingCart.map(item => <span className="center cart-product-price"> {products.filter((product) => item.itemId === product.id)[0].price} </span>)
                    }
                    {/* <span className="center cart-product-subtotal">{product.price * quantity}</span> */}
                    {/* need to take into account previous subtotal! */}
                </div>
                </div>
                <div className="receipt">
                <div className="receipt-subtotal">
                    <span className="label">Subtotal</span>
                    <span></span>
                    <span></span>
                    {/* <span className="center subtotal">{product.price * quantity}</span> */}
                </div>
                {/* <div className="receipt-taxes">
                    <span className="label">Taxes and Fees</span>
                    <span></span>
                    <span></span>
                    <span className="center">$0.52</span>
                </div> */}
                {/* <div className="receipt-total">
                    <span className="label">Total</span>
                    <span></span>
                    <span></span>
                    <span className="center total-price">$6.50</span>
                </div> */}
                <div className="receipt-total">
                    <span className="label">Total</span>
                    <span></span>
                    <span></span>
                    {/* <span className="center total-price">{product.price * quantity}</span> */}
                </div>
                </div>
                </div>
            )    
        }
    }
}