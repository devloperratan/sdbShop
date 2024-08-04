import React from "react";
import './Footer.css'
function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Shradhha Divine Beauty Shop. All Rights Reserved.</p>
                <ul className="social-links">
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;