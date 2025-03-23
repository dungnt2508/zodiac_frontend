import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../components/layout/Base.jsx";
import Features from "../components/layout/Features.jsx";
import MiniGameContent from "../components/layout/MiniGameContent.jsx";


const MiniGame = () => {
    return (
    <BaseLayout>
        <MiniGameContent />
        <Features />
    </BaseLayout>
  );
};

export default MiniGame;
