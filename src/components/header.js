import React, { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaMailBulk, FaPhone, FaHamburger } from "react-icons/fa";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isHeaderActive, setHeaderActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const changeColor = () => {
    if (window.scrollY >= 40) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  // Add scroll event listener in useEffect to avoid multiple bindings
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <header className={isHeaderActive ? "scroll" : ""}>
        <h3>petviv</h3>

        <ul className="links">
          <li>Home</li>
          <li>About</li>
          <li>Properties</li>
          <li>Oil and gas</li>
        </ul>

        <div className="contact-us">
          <p>Our Hotline</p>
          <p>+234 000 000 0000</p>
        </div>

        <div id="menu-icon" onClick={toggleSidebar}>
          {isSidebarActive ? "✖" : <FaHamburger />}
        </div>

        <ul className={`sidebar ${isSidebarActive ? "active" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Real Estate</li>
          <li>Oil and gas</li>
          <div className="icons">
            <FaInstagram />
            <FaTwitter />
            <FaMailBulk />
            <FaPhone />
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
