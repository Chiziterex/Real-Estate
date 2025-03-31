import React from "react";
import Header from "./header";
import {FaArrowRight} from "react-icons/fa";

const OilandGas = () => {
  return (
    <>
      <Header />
      <div className="buy rent oilgas">
        <div className="head">
          <h3 id="header">Available stocks</h3>
        </div>
        <div className="box-container">
          <div classsName="box">
            <p>Petrol</p>
            <button className="btn">
              Explore
              <FaArrowRight />
            </button>
          </div>
          <div classsName="box">
            <p>Gasoline</p>
            <button className="btn">
              Explore
              <FaArrowRight />
            </button>
          </div>
          <div classsName="box">
            <p>Diesel</p>
            <button className="btn">
              Explore
              <FaArrowRight />
            </button>
          </div>
          <div classsName="box">
            <p>kerosene</p>
            <button className="btn">
              Explore
              <FaArrowRight />
            </button>
          </div>
          <div classsName="box">
            <p>Jet fuel</p>
            <button className="btn">
              Explore
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OilandGas;
