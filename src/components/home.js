import React from "react";
import Header from "./header";
import { FaInstagram, FaTwitter, FaMailBulk, FaPhone } from "react-icons/fa";
// import { BrowserRouter, Router } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
    <div className="home">
      <div className="backdrop-color">
        <div className="content">
            <h3>Welcome to <span>petviv</span></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing....</p>
            <div className="btn-container">
              <button className="btn">learn more</button>
            </div>
          </div>
          
          {/* <div className="homeIconsFooter">
            <FaInstagram />
            <FaTwitter />
            <FaMailBulk />
            <FaPhone />
            </div> */}
      </div>
    </div>
  </>
    )
};

export default Home;
