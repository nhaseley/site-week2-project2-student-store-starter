import * as React from "react"
import "./ProductDetail.css"
import {useEffect, useState} from "react"
// import NotFound from "../NotFound/NotFound"
import {useParams} from "react-router-dom"
// import PropTypes from "prop-types"
import ProductView from '../ProductView/ProductView'

export default function ProductDetail(){
    return(
    <div id="Buy" className = "product-grid">
        {/* export default function ProductDetail(quantity){ */}
        {/* <ProductView quantity={quantity} /> */}
    <ProductView />

</div>
)}