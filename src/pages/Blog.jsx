import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../components/layout/Base.jsx";
import Features from "../components/layout/Features.jsx";
import BlogContent from "../components/layout/BlogContent.jsx";


const Blog = () => {
    return (
    <BaseLayout>
        <BlogContent />
        <Features />
    </BaseLayout>
  );
};

export default Blog;
