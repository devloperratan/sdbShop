import React, { useContext,useState } from "react";
import { CartContext } from "../component/CartContext";
import './Cart.css';
import { Navigate, useNavigate} from "react-router-dom";
import { CheckOutPopup } from "../component/CheckOutPopup";
function Cart() {

    const { cartItems } = useContext(CartContext);
    const {addToCart}= useContext(CartContext);
    const {removeFromCart}=useContext(CartContext);
    const {clearCart}=useContext(CartContext);
const navigate = useNavigate();
const [showPopup, setShowPopup] = useState(false);
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.ProductRate * item.quantity, 0);
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        setShowPopup(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
        clearCart();
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
            {showPopup && <CheckOutPopup onClose={handleClosePopup} />}
        </div>
    );
}

export default Cart;
