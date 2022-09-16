import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <span className="local" style={{ padding: "0", fontSize: "0.5rem !important" }}>
        &copy; 2022 MakersDev
      </span>
    </footer>
  );
};

export default Footer;
