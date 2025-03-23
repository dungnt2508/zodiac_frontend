import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DailyPrediction from "./pages/DailyPrediction.jsx";

function App() {
  return (
    <Router basename="/zodiac_frontend/"> {/* Thêm basename cho đường dẫn */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-prediction" element={<DailyPrediction />} />
      </Routes>
    </Router>
  );
}

export default App;
