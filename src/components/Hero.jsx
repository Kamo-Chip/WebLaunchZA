import { useEffect } from "react";
import "../styles/Hero.css";
import Logo from "./Logo";
import HeroImg from "../images/hero.png";
import Aos from "aos";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="hero">
      <Logo />
      <div className="hero-container">
        <div className="hero-text-container">
          <span data-aos="fade-left" data-aos-easing="ease">
            Get Found 🔎
            <br />
          </span>
          <span data-aos="fade-left" data-aos-delay="1500" data-aos-easing="ease">
            Get Leads 🧲 <br />
          </span>
          <span data-aos="fade-left" data-aos-delay="2500" data-aos-easing="ease">
            Get Customers 📈
          </span>
          <small data-aos="fade-in" data-aos-delay="3000" data-aos-easing="ease-in">
            We establish your business's online presence <br />
            by building you a stellar <b>website</b> and managing <br /> your{" "}
            <b>Google Business Profile</b>
          </small>
        </div>
        <img src={HeroImg} alt="Phone"/>
      </div>
    </div>
  );
};

export default Hero;
