import React from "react";
import "../styles/Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="services" id="services">
      <h1>This is how we help you</h1>
      <div className="sale">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            textAlign: "center",
            background: "#ba52ff",
            color: "#fff",
            padding: ".5em 1em 2em 1em",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <p
            style={{ fontFamily: "Mabry, sans-serif", marginBottom: "0" }}
            className="percentage"
          >
            40% Off
          </p>
          <p>Website development</p>
          <small>*Ends on 26 October 2022</small>
        </div>
      </div>

      <div className="services-container">
        <div className="item" data-aos="fade-left" data-aos-easing="ease">
          <h2>Website development</h2>
          <span
            style={{
              position: "absolute",
              backgroundColor: "#00cbba",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              borderRadius: "20px",
              transform: "rotate(-10deg) translate(-20%, -40px)",
              padding: ".5em",
            }}
          >
            <b>Most popular</b>
          </span>
          <span
            style={{
              textAlign: "center",
            }}
            className="price"
          >
            <span
              style={{
                color: "rgb(100, 100, 100)",
                textDecoration: "line-through",
              }}
            >
              <span
                style={{
                  color: "rgb(100, 100, 100)",
                  padding: ".5em .5em .5em 0",
                }}
              >
                R2000
              </span>
            </span>
            <span>R1200</span>
          </span>
          <p style={{ textAlign: "center" }}>
            This is not just a website. This is the face of your business.
          </p>
          <ul>
            <li>
              We work closely with you to craft a beautiful website that suits
              your's and your customer's needs.
            </li>
            <li>
              You do not have to worry about the website's content. We handle
              all of that for you.
            </li>
            <li>
              We ensure that your website looks good and works properly on a
              range of differenct devices, including laptops, tablets and
              phones.
            </li>
            <li>
              Our development process is streamlined to the point that we
              confidently provide high quality work in a short period of time.
            </li>
          </ul>
        </div>
        <div className="item" data-aos="fade-right" data-aos-easing="ease">
          <h2>Google Business Profile Set Up</h2>
          <span
            style={{
              position: "absolute",
              backgroundColor: "#00cbba",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              borderRadius: "20px",
              transform: "rotate(-10deg) translate(-5%, -60px)",
              padding: ".5em",
              textAlign: "center",
            }}
          >
            <b>50% off if paired with GBP management</b>
          </span>
          <span
            style={{
              textAlign: "center",
            }}
            className="price"
          >
            R1000
          </span>
          <p style={{ textAlign: "center" }}>
            The best way to get started if you don't already have a google
            business profile
          </p>
          <ul>
            <li>
              We set up your profile according to industry best practices and
              current standards
            </li>
            <li>The service includes:</li>
            <div>
              <li>Account creation</li>
              <li>Profile creation</li>
              <li>Profile verification</li>
              <li>Profile optimisation</li>
              <li>Avatar design</li>
              <li>Cover design</li>
            </div>
          </ul>
        </div>
        <div className="item" data-aos="fade-left" data-aos-easing="ease">
          <h2>Google Business Profile Management</h2>
          <span
            style={{
              textAlign: "center",
            }}
            className="price"
          >
            R500 p/m
          </span>
          <p style={{ textAlign: "center" }}>
            A hands-off solution for getting higher rankings and being more
            visible online.
          </p>
          <ul>
            <li>
              We optimise your profile by using ahead of the curve techniques,
              so that you constantly rank high on local searches.
            </li>
            <li>
              We save you time, by helping you avoid the hassle of managing your
              profile, such as responding to reviews, updating your details,
              montioring spam, curating Q&A's, monitoring competitor
              performance, and so on. This list goes on for much longer. We
              handle all of this for you so that you can focus on doing what you
              do best!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
