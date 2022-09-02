import "../styles/Why.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  
  return (
    <div data-aos="fade-up" className="why">
      <h1>This is why you need a website</h1>
      <div className="why-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>
            The private practice sector is growing extremely fast and
            competition is very high. You should invest in your own website
            because:
          </p>
          <h3 data-aos="fade-left">Clients need to find you</h3>
          Potential clients use the internet to find services they need. Little
          or no online presence will negatively impact your business.{" "}
          <b>We make you seen.</b>
          <h3 data-aos="fade-right">Protect and grow your professional reputation</h3>
          Not having an online presence means you do not have control over your
          reputation. Inaccurate reviews of your services can be made, and this
          will affect your future prospects.{" "}
          <b>We help you protect your reputation.</b>
          <h3 data-aos="fade-left">Professionals need to find you</h3>
          Referring practitioners use the internet as a tool for due diligence.
          You may have a group of professionals who consistently refer their
          clients to you, but newer professionals will look online for local,
          reliable professionals. A fantastic CV is one thing, but colleagues
          will definitely be impressed if they can instantly access your
          information online for easy referral.{" "}
          <b>We show that you're capable.</b>
          <h3 data-aos="fade-right">Be prepared for change</h3>Having only a single channel for new
          client acquisition is not wise.
          <b>We diversify your acquisition strategy.</b>
        </div>
      </div>
    </div>
  );
};

export default Why;
