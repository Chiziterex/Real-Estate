import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaMailBulk, FaPhone, FaHamburger } from "react-icons/fa";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isheaderActive, setHeader] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const changeColor = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <header className={isheaderActive ? "scroll" : ""}>
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
