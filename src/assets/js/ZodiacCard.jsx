import React from 'react';

function ZodiacCard({ zodiac, onClick }) {
  return (
    <div className="zodiac-card" onClick={onClick}>
      <h3>{zodiac.zodiac.name}</h3>
      <p>{zodiac.zodiac.description}</p>
      <p><strong>Tương hợp:</strong> {zodiac.zodiac.compatibility}</p>
      <p><strong>Vận mệnh 2025:</strong> {zodiac.zodiac.fortune_2025}</p>
    </div>
  );
}

export default ZodiacCard;