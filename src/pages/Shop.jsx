// Shop.jsx
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../component/CartContext";
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    // const { cartCount, setCartCount } = useContext(CartContext);
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="shop-product">
            {products.length > 0 ? (
                products.map(product => (
                    <div className="card" key={product.id}>
                        {product.ProductImg && product.ProductImg !== "{}" ? (
                            <img src={product.ProductImg} alt={product.ProductName} />
                        ) : (
                            <span>No Image</span>
                        )}
                        <h3>{product.ProductName}</h3>
                        <p>{product.ProductDesc}</p>
                        <p>${product.ProductRate}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}

export default Shop;
