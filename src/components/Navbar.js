import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/zodiac-info">12 Con Giáp</Link></li>
        <li><Link to="/zodiac-predict">Dự đoán</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
