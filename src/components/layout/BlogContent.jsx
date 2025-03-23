import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/mvp.css';

const BlogContent = () => {
  return (
    <section className="mvp">
      <div className="mvp-content">
        <h1 className="mvp-text">
          Đây là phiên bản MVP của chúng tôi. <br />
          Trang Sự tích 12 con giáp sẽ chính thức ra mắt trong phiên bản sản xuất. <br />
          Cảm ơn bạn đã ghé thăm!
        </h1>
        <p>
          <Link to="/" className="mvp-interact">
            Quay lại trang chính
          </Link>
        </p>
      </div>
    </section>
  );
};

export default BlogContent;