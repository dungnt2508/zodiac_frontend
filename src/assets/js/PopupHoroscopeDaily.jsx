import React from 'react';

function PopupHoroscopeDaily({ horoscope_daily, closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>×</span>
        <h2>Họ tên : </h2> <h3>{horoscope_daily.full_name}</h3>
        <h2>Ngày sinh :</h2> <h3> {horoscope_daily.birth_day} {horoscope_daily.birth_time ? `- ${horoscope_daily.birth_time}` : ""}</h3>

        <h2>Vận mệnh hôm nay : {horoscope_daily.formatted_date}</h2> <h3> </h3>
        <p>
          <span dangerouslySetInnerHTML={{ __html: horoscope_daily.result }} />
        </p>
      </div>
    </div>
  );
}

export default PopupHoroscopeDaily;