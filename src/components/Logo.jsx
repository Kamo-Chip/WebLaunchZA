import React from "react";
import "../styles/Logo.css";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <div className="logo">
      <span>{"</> MakersDev"}</span>
      <div className="navigation">
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
