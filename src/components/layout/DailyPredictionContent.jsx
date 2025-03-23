import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import PopupHoroscopeDaily from '../../assets/js/PopupHoroscopeDaily.jsx';
import "react-datepicker/dist/react-datepicker.css";

const BirthDateTimePicker = ({ onDateChange, onTimeChange, birthDate, birthTime }) => {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 1;

  return (
    <div className="form-group">
      <div className="form-group">
        <DatePicker
          selected={birthDate}
          onChange={onDateChange}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          showMonthDropdown
          minDate={new Date(1900, 0, 1)}
          maxDate={new Date(maxYear, 11, 31)}
          className="custom-datepicker"
          placeholderText="Chọn ngày sinh dương lịch"
        />
      </div>
      <div className="form-group">
        <DatePicker
          selected={birthTime}
          onChange={onTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Giờ"
          dateFormat="HH:mm"
          className="custom-datepicker"
          placeholderText="Chọn giờ sinh"
        />
      </div>
    </div>
  );
};

const DailyPredictionContent = () => {
  // State cho form
  const [formData, setFormData] = useState({
    full_name: '',
    birth_day: '', // Chuỗi định dạng "YYYY-MM-DD"
    birth_time: '', // Chuỗi định dạng "HH:mm"
    contact: ''
  });

  // State riêng cho DatePicker
  const [birthDate, setBirthDate] = useState(null);
  const [birthTime, setBirthTime] = useState(null);

  // State cho popup và kết quả từ API
  const [showPopup, setShowPopup] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Xử lý thay đổi input văn bản
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý thay đổi ngày sinh
  const handleDateChange = (date) => {
    setBirthDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
      setFormData({ ...formData, birth_day: formattedDate });
    } else {
      setFormData({ ...formData, birth_day: '' });
    }
  };

  // Xử lý thay đổi giờ sinh
  const handleTimeChange = (time) => {
    setBirthTime(time);
    if (time) {
      const formattedTime = time.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
      }); // "HH:mm"
      setFormData({ ...formData, birth_time: formattedTime });
    } else {
      setFormData({ ...formData, birth_time: '' });
    }
  };

  // Xử lý khi nhấp nút "Khám phá"
  const handleExplore = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Reset lỗi trước khi gửi

    // Kiểm tra dữ liệu đầu vào
    if (!formData.birth_time) {
      setErrorMessage("Vui lòng chọn ngày sinh!");
      return;
    }

    try {
        const API_URL = import.meta.env.VITE_APP_API_URL;
        const response = await axios.post(`${API_URL}/api/horoscope_daily/`, {
                full_name: formData.full_name,
                birth_day: formData.birth_day,
                birth_time: formData.birth_time
            });
      setPredictionResult(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching prediction:', error);
      const errorMsg = error.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại!';
      setPredictionResult({ result: errorMsg }); // Dùng "result" thay "message" để đồng bộ với backend
      setShowPopup(true);
    }
  };

  // Đóng popup
  const closePopup = () => {
    setShowPopup(false);
    setPredictionResult(null);
    setErrorMessage(null);
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="neon-text">Vận mệnh năm Rắn Vàng 2025</h1>
        <p>Nhập thông tin để khám phá vận mệnh và phong thủy của bạn!</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleExplore}>
          <div className="zodiac-form glass-effect">
            <div className="form-group">
              <input
                type="text"
                name="full_name"
                placeholder="Họ tên của bạn"
                value={formData.full_name}
                onChange={handleInputChange}
              />
            </div>
            <BirthDateTimePicker
              birthDate={birthDate}
              birthTime={birthTime}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />
            <div className="form-group">
              <input
                type="text"
                name="contact"
                placeholder="Email hoặc Telegram ID"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group button-group">
              <button type="submit" className="btn-interact">
                Khám phá
              </button>
            </div>
          </div>
        </form>

        {showPopup && (
          <>
            <div className="overlay" onClick={closePopup}></div>
            <PopupHoroscopeDaily
              horoscope_daily={{
                full_name: formData.full_name || 'Người dùng',
                birth_day: formData.birth_day,
                birth_time: formData.birth_time,
                contact: formData.contact,
                result: predictionResult?.result || 'Không có kết quả'
              }}
              closePopup={closePopup}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DailyPredictionContent;