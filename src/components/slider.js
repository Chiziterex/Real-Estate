import React, { useState, useEffect } from "react";
import Home from "./home.js";
import realEstate1 from "../assets/realEstate1.jpg";
import realEstate2 from "../assets/realEstate2.jpg";
import realEstate3 from "../assets/realEstate3.jpg";
import realEstate4 from "../assets/realEstate4.jpg";
import refinery1 from "../assets/refinery1.jpg";
import refinery2 from "../assets/refinery2.jpg";
import refinery3 from "../assets/refinery3.jpg";
import refinery4 from "../assets/refinery4.jpg";

const Slider = () => {
    const imageArray = [
        realEstate1,
        refinery1,
        realEstate2,
        refinery2,
        refinery3,
        realEstate3,
        realEstate4,
        refinery4,
    ];

    const [imageIndex, setImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Mobile check

    // Effect to handle window resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Effect to automatically change background images every 3.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 5000); // Change image every 3.5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [imageArray.length]);

    // Dynamic styles for the slider
    const sliderStyle = {
        backgroundImage: `url(${imageArray[imageIndex]})`,
        backgroundRepeat: "no repeat",
        backgroundSize: isMobile ? "contain" : "cover", // Adjust background size based on screen size
        backgroundPosition: isMobile ? "center top" : "center",
        height: isMobile ? "80vh" : "100vh", // Adjust height based on screen size
        width: "100vw",
        position: "relative",
        transition: "background-image 1s ease-out", // Smooth transition for background image
    };

    return (
        <div style={sliderStyle} className="slider">
            <Home />
        </div>
    );
};

export default Slider;
