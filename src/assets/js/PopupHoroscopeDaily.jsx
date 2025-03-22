import React from 'react';

function PopupHoroscopeDaily({ horoscope_daily, closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>×</span>
        <h2>{horoscope_daily.full_name}</h2>
        <h2>{horoscope_daily.birth_day}</h2>
        <h2>{horoscope_daily.bith_time}</h2>
        <h2>{horoscope_daily.contact}</h2>
        {/* Render HTML thô từ fortune_today */}
        <p>
          <strong>Vận mệnh hôm nay:</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: horoscope_daily.result }} />
        </p>
      </div>
    </div>
  );
}

export default PopupHoroscopeDaily;