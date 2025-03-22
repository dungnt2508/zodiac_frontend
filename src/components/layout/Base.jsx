import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import "../../assets/css/animations.css";
import "../../assets/css/navbar.css";
import "../../assets/css/hero.css";
import "../../assets/css/navbar.css";
import "../../assets/css/popup.css";
import "../../assets/css/responsive.css";
import "../../assets/css/footer.css";
import "../../assets/css/zodiac-form.css";
import "../../assets/css/snake.css";

// import "../../assets/css/zodiac-signs.css";

import snakeLogo from "../../assets/imgs/snake-gold.png";

const BaseLayout = ({ children }) => {
  return (
    <>
      <header className="navbar">
          <div className="logo">
            <Link to="/" className="nav-item">
              <img src={snakeLogo} alt="Snake Logo" className="snake-logo" />
            </Link>
          </div>
          <nav className="nav-container">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-item">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/zodiac-info" className="nav-item">
                  12 Con Giáp
                </Link>
              </li>
              <li>
                <Link to="/zodiac-predict" className="nav-item">
                  Dự đoán
                </Link>
              </li>
            </ul>
          </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
          <p>
            © 2025 - 12 Con Giáp. Thiết kế với <span className="heart">♥</span> bởi gsnake1102.
          </p>
      </footer>
    </>
  );
};

export default BaseLayout;