import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import { CartContext } from '../../component/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const ProductSlider = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // const slides = products.map(product => ({
    //     image: product.ProductImg,
    //     title: product.ProductName,
    //     description: (
    //         <div className="product-card-description">
    //             <h4>{product.ProductDesc || "No description available"}</h4>
    //             <h4>Price: ${product.ProductRate}</h4>
    //             <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
    //         </div>
    //     ),
    //     clickEvent: () => navigate(`/product/${product.id}`)
    // }));

    return (
        <div className="product-slider">
        <h2>Latest Products</h2>
        <Carousel responsive={responsive}>
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <div className="product-image-wrapper">
                        <img className="product-image" src={product.ProductImg} alt={product.ProductName} 
                         onClick={() => navigate(`/product/${product.id}`)}/>
                    </div>
                    <h3>{product.ProductName}</h3>
                    <p>{product.ProductDesc}</p>
                    <h4>Price: ${product.ProductRate}</h4>
                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                
            ))}
        </Carousel>
    </div>
    );
};
