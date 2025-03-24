import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import PopupHoroscopeDaily from '../../assets/js/PopupHoroscopeDaily.jsx';
import "react-datepicker/dist/react-datepicker.css";
import '../../assets/css/DailyPredictionContent.css';

const BirthDateTimePicker = ({ onDateChange, onTimeChange, birthDate, birthTime }) => {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 1;

  return (
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
  );
};

const DailyPredictionContent = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    birth_day: '',
    birth_time: ''
  });

  const [birthDate, setBirthDate] = useState(null);
  const [birthTime, setBirthTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleDateChange = useCallback((date) => {
    setBirthDate(date);
    setFormData(prev => ({ ...prev, birth_day: date ? date.toISOString().split('T')[0] : '' }));
  }, []);

  const handleTimeChange = useCallback((time) => {
    setBirthTime(time);
    if (time) {
      const hours = String(time.getHours()).padStart(2, '0');
      const minutes = String(time.getMinutes()).padStart(2, '0');
      setFormData(prev => ({ ...prev, birth_time: `${hours}:${minutes}` }));
    } else {
      setFormData(prev => ({ ...prev, birth_time: '' }));
    }
  }, []);

  const handleExplore = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.full_name || !formData.birth_day) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_APP_API_URL;
      if (!API_URL) {
        setErrorMessage("Lỗi: Không tìm thấy URL API!");
        return;
      }

      const response = await axios.post(`${API_URL}/api/horoscope_daily/`, formData);
      if (isMounted.current) {
        setPredictionResult(response.data);
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Error fetching prediction:', error);
      if (isMounted.current) {
        setPredictionResult({ result: error.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại!' });
        setShowPopup(true);
      }
    }
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
            <input
              type="text"
              name="full_name"
              placeholder="Họ tên của bạn"
              value={formData.full_name}
              onChange={handleInputChange}
            />
            <BirthDateTimePicker
              birthDate={birthDate}
              birthTime={birthTime}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />
            <button type="submit" className="btn-interact">Khám phá</button>
          </div>
        </form>

        {showPopup && (
          <>
            <div className="overlay" onClick={() => setShowPopup(false)}></div>
            <PopupHoroscopeDaily
              horoscope_daily={{
                full_name: formData.full_name,
                birth_day: formData.birth_day.split('-').reverse().join('/'),
                birth_time: formData.birth_time,
                result: predictionResult?.result || 'Không có kết quả'
              }}
              closePopup={() => setShowPopup(false)}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DailyPredictionContent;
