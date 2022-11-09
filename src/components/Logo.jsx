import "../styles/Logo.css";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import LogoIcon from "../images/logo.png";
import { useEffect, useState } from "react";
import Aos from "aos";

const Logo = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-socials").classList.add("disappear");
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").classList.add("nav-socials-on");
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    setShowNavItems(false);
    toggleNav();
  };

  useEffect(() => {}, [showNavItems]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <nav className="navigation">
      <span className="logo">
        <img src={LogoIcon} alt="burger-icon" />
        MakersDev
      </span>
      <div className="nav-items-container">
        <div onClick={toggleNav} className="nav-icon-container">
          {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
        </div>
        <ul className="nav-list">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-socials">
          <span>
            Follow us to be the first to know about sales & other updates ⚡
          </span>
          <a
            href="https://www.instagram.com/makersdev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
            onClick={closeNav}
          >
            <AiFillInstagram size="1.7rem" color="#000" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Logo;
