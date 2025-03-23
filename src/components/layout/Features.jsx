import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/features.css";


const Features = () => {

  return (
    <section className="features">
        <div className="feature-card">
          <h3 className="text-3d">Bài viết nổi bật</h3>
          <p>
            <Link to="/blog">Rắn Vàng 2025: Điều gì chờ đợi?</Link>
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-3d">Tử vi hàng ngày</h3>
          <p>
            <Link to="/daily-prediction">Xem tử vi hàng ngày theo ngày sinh của bạn.</Link>
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-3d">Mini game</h3>
          <p>
            <Link to="/minigame">Chơi để khám phá vận mệnh bất ngờ trong ngày.</Link>
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-3d">Phong thủy con giáp</h3>
          <p>
            <Link to="/fengshui">Gợi ý phong thủy tăng vận may.</Link>
          </p>
        </div>
      </section>
  );
};

export default Features;
