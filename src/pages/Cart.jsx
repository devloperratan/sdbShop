import React, { useContext } from "react";
import { CartContext } from "../component/CartContext";
import './Cart.css';

function Cart() {
    const { cartItems } = useContext(CartContext);
    const {addToCart}= useContext(CartContext);
    const {removeFromCart}=useContext(CartContext)
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.ProductRate * item.quantity, 0);
    };
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.ProductImg} alt="" /></td>
                                <td>{item.ProductName}</td>
                                <td>{item.quantity}</td>
                                <td>${item.ProductRate}</td>
                                <td>${item.ProductRate * item.quantity}</td>
                                <td>
                                        <button onClick={() => addToCart(item)}>+</button>
                                        <button onClick={() => removeFromCart(item)}>-</button>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                   <h3>Total: ${calculateTotal()}</h3>
                </>
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );
}

export default Cart;
