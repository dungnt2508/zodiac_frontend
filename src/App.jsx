import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import DailyPrediction from "./pages/DailyPrediction.jsx";
import MiniGame from "./pages/MiniGame.jsx";
import FengShui from "./pages/FengShui.jsx";

function App() {
  return (
    <Router basename="/zodiac_frontend"> {/* Thêm basename cho đường dẫn */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/daily-prediction" element={<DailyPrediction />} />
        <Route path="/minigame" element={<MiniGame />} />
        <Route path="/fengshui" element={<FengShui />} />
      </Routes>
    </Router>
  );
}

export default App;
