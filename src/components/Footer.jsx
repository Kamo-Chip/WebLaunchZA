import React from "react";
import "../styles/Footer.css";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <span
        className="local"
        style={{ padding: "0", fontSize: "0.5rem !important" }}
      >
        &copy; 2022 MakersDev &#127487;&#127462;
      </span>
      <span className="socials">
        <a href="https://www.instagram.com/makersdev/"  target="_blank" rel="noreferrer">
          <AiFillInstagram size="2rem" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
