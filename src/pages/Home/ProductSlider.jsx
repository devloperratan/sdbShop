import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';

const sliderClick = (slide) => {
    console.log(`Clicked on: ${slide.title}`);
};

export const ProductSlider = () => {
    const [product,setProduct]=useState([])
    
    useEffect (()=>{
        axios.get('http://localhost:3000/products')
        .then(res=>{
            setProduct(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const slides=product.map(product=>({ 
        image: product.ProductImg, // Default image if product.imageUrl is not available
        title: product.ProductName,
        description: (
            <div>
                <p>{product.ProductDesc || "No description available"}</p> {/* Default description if product.ProductDesc is not available */}
                <p>Price: ${product.ProductRate}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ),
    }))
    
    return (
        <div style={{ padding: '20px' }}>
            <h2>Latest Products</h2>
            <ReactCardSlider slides={slides} />
        </div>
    );
};
