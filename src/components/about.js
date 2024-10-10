import React from "react";
import Refinery2 from "../assets/refinery2.jpg"
import RealEstate1 from "../assets/realEstate1.jpg"

const About = () => {
    return (
        <>
            <div className="about">
                <div className="content">
                    <h2>what we do</h2>
                    <div className="box">
                        <img src={RealEstate1} alt="real estate"></img>
                        <h3>Real Estate</h3>
                        <div className="text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. </p>
                            <button className="btn">Explore</button>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Refinery2} alt="oil and gas"></img>
                        <h3>Oil and Gas</h3>
                        <div className="text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. </p>
                            <button className="btn">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About