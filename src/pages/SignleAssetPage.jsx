import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './singleAss.css'
import { CartContext } from "../component/CartContext";

export function SingleAssetPage (){
    const [product,setProduct]=useState([]);
    const {id}=useParams();
    const {addToCart}=useContext(CartContext)
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
        })
    },[])
    return(
       <div className="singleProduct" >
      
<div className="productImg">
    <img src={product.ProductImg} alt="" /> 
    </div>
<div className="productDesc">
    <h3>{product.ProductName}</h3>
    <p>{product.ProductDesc}</p>
    <span>Rate: ${product.ProductRate}</span>
<button onClick={()=>{addToCart(product)}}>Add to cart</button>
</div>
       </div>
    )
}