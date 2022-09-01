import React from "react";
import "../styles/Contact.css";
import Work1 from "../images/work.jpg";

const Pricing = () => {
  return (
    <div className="contact" id="contact">
      <h1>Let's work together</h1>
      <div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}>
          <p>Send an email to: </p>
          <a href="mailto:hellomakersdev@gmail.com" target="_blank" rel="noreferrer">
            hellomakersdev@gmail.com
          </a>
        </div>
        <img alt="" src={Work1} />
      </div>
    </div>
  );
};

export default Pricing;
