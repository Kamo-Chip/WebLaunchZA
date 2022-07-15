import React from "react";
import "../styles/Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div
        className="hero-container"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "200px",
        }}
      >
        <div className="hero-text-container">
          <span>Helping Creators Make A</span>
          <span style={{ textAlign: "center" }}>
            <span
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: ".05em .3em",
              }}
            >
              Dent
            </span>{" "}
            On The Internet
          </span>
        </div>
      </div>
      <div>
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button>View Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
