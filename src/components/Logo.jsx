import "../styles/Logo.css";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import LogoIcon from "../images/logo.png";
import { useEffect } from "react";
import Aos from "aos";
import { useState } from "react";

const Logo = () => {
  const [trackNav, setTrackNav] = useState(true);
  const showNav = () => {
    const nav = document.querySelector(".navigation");
    if (trackNav) {
      nav.style.display = "flex";
      setTrackNav(false);
    } else {
      nav.style.display = "none";
      setTrackNav(true);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {}, [trackNav]);

  return (
    <div className="logo">
      <span>
        <img
          src={LogoIcon}
          style={{ height: "60px", border: "none" }}
          alt="</>"
        />
        {" MakersDev"}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "0",
          paddingRight: ".5rem",
        }}
      >
        <div className="navigation">
          <ul className="list">
            <li className="list-item">
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
            <li className="list-item">
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
            <li className="list-item">
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
        {trackNav ? (
          <HiMenuAlt4 className="menu-icon" onClick={showNav} size="1.7rem" />
        ) : (
          <HiX className="menu-icon" onClick={showNav} size="1.7rem" />
        )}
      </div>
    </div>
  );
};

export default Logo;
