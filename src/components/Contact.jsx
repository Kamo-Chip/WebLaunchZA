import React from "react";
import "../styles/Contact.css";
import Work1 from "../images/work.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="contact" id="contact">
      <h1 data-aos="fade-in">What are you waiting for?</h1>
      <div>
        <div data-aos="fade-in" data-aos-delay="1000"
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <p>Let's work together!</p>
          <a
            href="mailto:hellomakersdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
        </div>
        <img alt="" src={Work1} />
      </div>
    </div>
  );
};

export default Pricing;
