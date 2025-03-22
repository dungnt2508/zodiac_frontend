import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import BaseLayout from "../components/layout/Base.jsx";
import Features from "../components/layout/Features.jsx";
import DailyPredictionContent from "../components/layout/DailyPredictionContent.jsx";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS mặc định


const DailyPrediction = () => {
    return (
    <BaseLayout>
        <DailyPredictionContent />
        <Features />
    </BaseLayout>
  );
};

export default DailyPrediction;
