import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import BaseLayout from "../components/layout/BaseLayout.jsx";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS mặc định
// import moment from "moment-hijri"; // Thư viện hỗ trợ lịch âm


const BirthDateTimePicker = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [birthTime, setBirthTime] = useState(null);
  // Lấy năm hiện tại
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 1; // Chỉ cho phép chọn đến năm hiện tại - 1

  return (
    <div className="form-group">
      <div className="form-group">
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100} // Hiển thị danh sách năm (100 năm)
          showMonthDropdown // Cho phép chọn tháng
          minDate={new Date(1900, 0, 1)} // Không cho phép chọn trước 1900
          maxDate={new Date(maxYear, 11, 31)} // Không cho phép chọn sau năm hiện tại - 1
          className="custom-datepicker"
          placeholderText="Chọn ngày sinh dương lịch" />
      </div>

      <div className="form-group">
        <DatePicker
          selected={birthTime}
          onChange={(time) => setBirthTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Giờ"
          dateFormat="HH:mm"
          className="custom-datepicker"
          placeholderText="Chọn giờ sinh" />
      </div>
    </div>
  );
};

const Home = () => {
    return (
    <BaseLayout>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="neon-text">Vận mệnh năm Rắn Vàng 2025</h1>
          <p>Nhập thông tin để khám phá vận mệnh và phong thủy của bạn!</p>

          <div className="zodiac-form glass-effect">
            <div className="form-group">
              <input type="text" placeholder="Họ tên của bạn" required />
            </div>
            {/* Sử dụng BirthDateTimePicker */}
            <BirthDateTimePicker />

            <div className="form-group button-group">
              <button className="btn-interact">Khám phá</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3 className="text-3d">Con giáp hôm nay</h3>
          <p>Vui lòng chờ...</p>
        </div>
        <div className="feature-card">
          <h3 className="text-3d">Bài viết nổi bật</h3>
          <p>
            <Link to="/zodiac-info">Rắn Vàng 2025: Điều gì chờ đợi?</Link>
          </p>
        </div>
        <div className="feature-card">
          <h3 className="text-3d">Dự đoán vận mệnh</h3>
          <p>
            <Link to="/zodiac-predict">Xem vận mệnh chi tiết của bạn!</Link>
          </p>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Home;
