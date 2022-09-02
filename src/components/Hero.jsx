import React from "react";
import "../styles/Hero.css";
import { Link } from "react-scroll";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="hero">
      <Logo/>
      <div className="hero-container">
        <div className="hero-text-container">
          <span>
            We make <br />
            your practice
            <br />
            great
            <br />
          </span>
          <small>
            By creating beautiful websites to establish
            <br />
            your presence online
          </small>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <button>Let's work together</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
