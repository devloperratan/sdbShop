import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './PopupComponent.css';

const PopupComponent = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <Popup open={open}   onClose={() => setOpen(false)}>
            <div className="popup-content">
                <h2>Welcome to my Cosmetic Shop</h2>
                <p>Check out my latest products and offers.<br/>
                Email - ratansingh1042@gmail.com
                </p>
                <button onClick={() => setOpen(false)}>Close</button>
            </div>
        </Popup>
    );
};

export default PopupComponent;
