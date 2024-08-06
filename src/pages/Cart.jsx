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

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        // Implement your checkout logic here
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
                 
                </>
            ) : (
                <p>No items in the cart.</p>
            )}

            <div className="checkOut">
            <h3>Total: ${calculateTotal()}</h3>
                    <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
            
            </div>
        </div>
    );
}

export default Cart;
