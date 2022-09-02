import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <span style={{ textAlign: "center", padding: ".5em 0" }}>
        Ready to elevate your practice? <br />
        Let's connect
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiMail color="gold" />
          <a
            href="mailto:hellomakersdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </span>
      </div>
      <span className="local" style={{ padding: "0", fontSize: "0.5rem !important" }}>
        &copy; 2022 MakersDev | South Africa &#127487;&#127462;
      </span>
    </footer>
  );
};

export default Footer;
