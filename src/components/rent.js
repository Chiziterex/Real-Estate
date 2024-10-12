import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import { rentData } from "./rentData";
import { FaArrowRight, FaHeart , FaShoppingCart, FaLocationArrow, FaArrowDown } from "react-icons/fa";

const Rent = () => {
  return (
    <>
      <Header />
      <div className="buy rent">
        <div className="top-btns">
          <p className="current">
            Rent <FaArrowDown />
          </p>
          <Link to='/buy'><p>Buy<FaArrowRight /></p></Link>
        </div>
        <div className="country-btns">
        <p>Australia</p>
          <p>Nigeria</p>
          <p>USA</p>
        </div>

        <div className="box-container">
              {rentData.map((property) => (
                <div key={property.id} className="box">
                <div className="top-icons">
              <p>
                <FaHeart />
              </p>
              <p>
                <FaShoppingCart />
              </p>
              </div>
                      <img src={property.img} alt="unable to load photo" />
                      <div className="info">
                      <h3>{property.amount}</h3>
                      <span className="more-info">
                              <p>{property.rooms} rooms</p>
                              <p>{property.bathrooms} bathrooms</p>
                              <p>{property.size} sqft</p>
                          </span>
                          <span className="location-info">
                              <p><FaLocationArrow /></p>
                              <p>{property.location}</p>
                          </span>
                      </div>
                </div>
              ))}
</div>
      </div>
    </>
  );
};

export default Rent;
