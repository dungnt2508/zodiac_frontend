import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import BaseLayout from "../components/layout/Base.jsx";
import Features from "../components/layout/Features.jsx";
import HomeContent from "../components/layout/HomeContent.jsx";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS mặc định


const Home = () => {
    return (
    <BaseLayout>
        <HomeContent />
        <Features />
    </BaseLayout>
  );
};

export default Home;
