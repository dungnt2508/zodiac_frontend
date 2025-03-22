import React from 'react';

function Popup({ zodiac, closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <span className="close-btn" onClick={closePopup}>×</span>
        <h2>{zodiac.zodiac.name}</h2>
        {/* Render HTML thô từ fortune_today */}
        <p>
          <strong>Vận mệnh hôm nay:</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: zodiac.fortune_today }} />
        </p>
      </div>
    </div>
  );
}

export default Popup;