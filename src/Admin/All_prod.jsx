import axios from "axios";
import React, { useEffect, useState } from "react";
import './AllProd.css'
import { Link } from "react-router-dom";
export function All_prod(){
    const [products,setProd]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(res=>{
            console.log(res)
            setProd(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
const handleDelete=(productId)=>{
    axios.delete(`http://localhost:3000/products/${productId}`)
    .then((res)=>{
      setProd(res.data)
    })
    .catch(error => {
        console.error('There was an error deleting the Product!', error);
    });
}
    return(
        <div className="all-products">
        <h2>All Products</h2>
        {products.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.ProductName}</td>
                            <td>${product.ProductRate}</td>
                            <td>{product.ProductDesc}</td>
                            <td>
                                 <img src={product.ProductImg} alt="" />
                                </td>
                            <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
                            <td><Link onClick={()=>handleDelete(product.id)}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p>No products available</p>
        )}
    </div>
    )
}