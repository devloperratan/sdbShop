import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import { CartContext } from '../../component/CartContext';
import { useNavigate } from 'react-router-dom';

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

    const slides = products.map(product => ({
        image: product.ProductImg,
        title: product.ProductName,
        description: (
            <div>
                <h4>{product.ProductDesc || "No description available"}</h4>
                <h4>Price: ${product.ProductRate}</h4>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ),
        clickEvent: () => navigate(`/product/${product.id}`)
    }));

    return (
        <div style={{ padding: '20px' }}>
            <h2>Latest Products</h2>
            <ReactCardSlider slides={slides} />
        </div>
    );
};
