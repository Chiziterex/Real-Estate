import React from "react"
import Refinery2 from "../assets/fuel1.png"
import RealEstate1 from "../assets/house1.png"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

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
                            <div className="btn-container">
                            <Link to='/buy'><button className="btn">Buy<FaArrowRight /></button></Link>
                            <Link to='/rent'><button className="btn">Rent<FaArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Refinery2} alt="oil and gas"></img>
                        <h3>Oil and Gas</h3>
                        <div className="text">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elitLorem, ipsum dolor sit amet consectetur adipisicing. </p>
                            <div className="btn-container">
                            <Link to='/oilandgas'><button className="btn">Explore<FaArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About