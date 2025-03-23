import React from 'react';
import '../../assets/css/Horoscope.css';
import { FaBriefcase, FaCoins, FaHeart, FaLightbulb } from 'react-icons/fa';

function Popup({ zodiac, closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>×</span>
        <h2>{zodiac.zodiac.name}</h2>
        {/* Render HTML thô từ fortune_today */}
        <p>
          <strong>Vận mệnh hôm nay: </strong>{zodiac.formatted_date}
          <span dangerouslySetInnerHTML={{ __html: zodiac.fortune_today }} />
        </p>
      </div>
    </div>
  );
}

export default Popup;