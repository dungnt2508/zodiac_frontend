import React, { useState, useEffect } from "react";
import axios from "axios";
import ZodiacCard from '../../assets/js/ZodiacCard.jsx';
import Popup from '../../assets/js/Popup.jsx';
import '../../assets/css/zodiac-card.css';


function HomeContent() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [zodiacDailyPredict, setZodiacDailyPredict] = useState([]);

  useEffect(() => {
    const fetchZodiacData = async () => {
      try {
          console.log(import.meta.env);
          const API_URL = import.meta.env.VITE_APP_API_URL;
        const response = await axios.get(`${API_URL}/api/predictions/`);
//         console.log("url", `${API_URL}/api/predictions/`)
        setZodiacDailyPredict(response.data); // Cập nhật dữ liệu từ API
      } catch (error) {
        console.error("Error fetching zodiac data:", error);
        setZodiacDailyPredict([
          {
            code: 'rat',
            name: 'Tý (Chuột)',
            description: 'Thông minh, nhanh nhẹn, thích nghi tốt.',
            compatibility: 'Thân, Thìn',
            fortune_2025: 'Năm thuận lợi, tài lộc dồi dào.',
            fortune_today: 'Hôm nay may mắn trong công việc.'
          },
        ]);
      }
    };

    fetchZodiacData();
  }, []);

  const openPopup = (zodiac) => {
//     console.log('Opening popup with:', zodiac); // Debug giá trị zodiac
    setSelectedZodiac(zodiac);
  };

  const closePopup = () => {
    setSelectedZodiac(null);
  };

  useEffect(() => {
//     console.log('Selected Zodiac updated:', selectedZodiac); // Debug state
  }, [selectedZodiac]);

  return (
    <>
      <section className="zodiac-signs">
        <div className="zodiac-header">
          <h1 className="neon-text">Khám phá 12 Con Giáp</h1>
          <p>Thông tin hàng ngày về tính cách, vận mệnh, và tương hợp của từng con giáp.</p>
        </div>

        <div className="zodiac-grid">
          {zodiacDailyPredict.map((zodiac, index) => (
            <ZodiacCard
              key={`${zodiac.code}-${index}`}
              zodiac={zodiac}
              onClick={() => openPopup(zodiac)}
            />
          ))}
        </div>
      </section>

      {selectedZodiac && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <Popup zodiac={selectedZodiac} closePopup={closePopup} />
        </>
      )}
    </>
  );
}

export default HomeContent;