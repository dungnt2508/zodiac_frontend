import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import snakeLogo from "../../assets/imgs/snake-gold.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar">  {/* Gói cả logo + nav lại */}
            <div className="logo">
                <Link to="/" className="nav-item">
                    <img src={snakeLogo} alt="Snake Logo" className="snake-logo" />
                </Link>
            </div>
            <nav className="nav-container">
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/" className="nav-item">
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/daily-prediction" className="nav-item">
                            Tử vi hàng ngày
                        </Link>
                    </li>
                    <li>
                        <Link to="/minigame" className="nav-item">
                            Minigame
                        </Link>
                    </li>
                    <li>
                        <Link to="/fengshui" className="nav-item">
                            Tư vấn phong thủy
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="nav-item">
                            Sự tích 12 con giáp
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
