// Header.jsx
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import './Header.css';

function Header() {
    return (
        <header className="navigation">
            <div className="container">
                <div className="title">SDB Shop</div>
                <nav className="nav-links">
                    <ul>
                        <li><NavLink to="/" className="active">Shop</NavLink></li>
                        <li><NavLink to="/cart" className="active">
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
