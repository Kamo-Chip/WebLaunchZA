import "../styles/About.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Gmb from "../images/gmb.png";
import Web from "../images/web.jpg";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="about"
      id="about"
      data-aos="fade-in"
      data-aos-easing="ease-in"
    >
      <div className="img-container">
        <img src={Web} />
        <img src={Gmb} />
      </div>
      <div className="text-container">
        <h1>Competition is higher than ever. Stand-out from the crowd</h1>
        <p>
          In today's climate, the majority of Google searches show local search
          results. This means that to grow as a business you need to be found
          online. You might be saying "That's great, but how do I get found
          online?". This is where we come in. At MakersDev we offer services
          that establish you online so that you can get new customers every week
          and secure your business's growth and profitability in the new digital
          economy. Let us handle the hassle of maintaining your online presence
          so that you can continue doing what you do best!
        </p>
        <p>
          How do we do this? By building you a stellar <em>website</em>, and
          setting up and managing your very own optimised{" "}
          <em>Google My Business Profile</em>. This combination of services is
          proven to be an extremely effective way of improving your visibility,
          and we can confidently say that we will make you seen!
        </p>
      </div>
    </div>
  );
};

export default About;
