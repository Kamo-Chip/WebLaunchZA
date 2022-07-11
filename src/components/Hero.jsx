import React from 'react';
import Star from "../images/star.svg";
import "../styles/Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-container" style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "200px",
        }}>

          <div className="stars" style={{display: "flex", flexDirection: "column", width: "fit-content"}}>
            <img src={Star} alt=""/>
            <img src={Star} alt="" style={{
              marginRight: "60px",
            }}/>
            <img src={Star} alt=""/>
          </div>

            <div className='hero-text-container'>
              <span>Creating Websites</span> 
              <span style={{textAlign: "center"}}>For Creators</span>
            </div>
   
            <div className="stars" style={{display: "flex", flexDirection: "column", width: "fit-content"}}>
              <img src={Star} alt=""/>
              <img src={Star} alt="" style={{
                marginLeft: "60px",
              }}/>
              <img src={Star} alt=""/>
          </div>

        </div>
        <div>
        <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={500}>
          <button>See Plans</button>
        </Link>
        </div>
    </div>
  )
}

export default Hero