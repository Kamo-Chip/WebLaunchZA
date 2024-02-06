import React, { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Pricing = () => {
  const form = useRef();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwikkkg",
        "template_qzq2fjy",
        form.current,
        "kff8pfyEAzcn03zQA"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1>
        What are you waiting for?
        <br />
        {"Let's"} work together!
      </h1>
      <div className="contact-container">
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="contact-wrapper"
        >
          <div className="details-container">
            <h3>Contact Us Today</h3>
            <div className="contact-details" style={{}}>
              <span style={{ paddingRight: "1.5em" }}>
                <MdEmail />
              </span>
              <a
                href="mailto:weblaunchza@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email Us
              </a>
            </div>
            <div className="contact-details" style={{}}>
              <span style={{ paddingRight: "1.5em" }}>
                <IoLogoWhatsapp />
              </span>
              <a
                href="https://wa.me/270724802452"
                target="_blank"
                rel="noreferrer"
                title="Message us on WhatsApp"
              >
                Message Us
              </a>
            </div>
            <div className="contact-details">
              <span style={{ paddingRight: "1.5em" }}>
                <BsTelephoneFill />
              </span>
              <a href="tel:+2772-480-2452">072 480 2452</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
