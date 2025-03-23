import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/main.css";
import "../../assets/css/animations.css";
import "../../assets/css/hero.css";
import "../../assets/css/popup.css";
import "../../assets/css/responsive.css";
import "../../assets/css/footer.css";
import "../../assets/css/zodiac-form.css";
import "../../assets/css/snake.css";
import Navbar from "./Navbar";

// import "../../assets/css/zodiac-signs.css";



const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />

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