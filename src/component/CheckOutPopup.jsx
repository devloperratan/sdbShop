import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export function CheckOutPopup({ onClose }) {
    return (
        <Popup open={true} onClose={onClose}>
            <div className="popup-content">
                <h2>Thank you for shopping! Please visit again and rate your experience.</h2>
                <span>Email: ratansingh1042@gmail.com</span>
                <br />
                <button onClick={onClose}>Close</button>
            </div>
        </Popup>
    );
}
