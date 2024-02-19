import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Item from "../components/Item";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="services" id="services">
      <h1>This is how we help you</h1>
      {/* <div className="sale">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            textAlign: "center",
            background: "#792fd3d1",
            color: "#fff",
            padding: "1.5rem 1rem",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <p
            style={{ fontFamily: "grifter, sans-serif", margin: "0" }}
            className="percentage"
          >
            33% Off
          </p>
          <p>Website Design & Development</p>
          <small>Ends on 01 March 2024</small>
        </div>
      </div> */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "0",
          marginBottom: "2rem",
        }}
        data-aos="fade-in"
        data-aos-easing="ease"
      >
        Individual services
      </h2>
      <div className="services-container">
        <Item
          serviceName={"Website design & development"}
          price={"3 000"}
          salePrice={"2000"}
          tagLine={
            "This is not just a website. This is the face of your business."
          }
          perkList={[
            "Unlimited customisation",
            "Free analytics tracking",
            "1 week turnaround time",
            "Fully responsive from desktop to smartphone",
            "Up to 5 pages",
            "SEO enabled",
          ]}
        />
        <Item
          serviceName="Google Business Profile set up"
          price="1 000"
          tagLine="The best way to get started if you don't already have a google business profile"
          perkList={[
            "We set up your profile according to industry best practices and current standards",
          ]}
          furtherPerkList={[
            "Profile creation",
            "Profile verification",
            "Profile optimisation",
            "Logo design",
            "Cover design",
          ]}
        />
        {/* <Item
          serviceName={"Google Business Profile management"}
          price={"750 p/m"}
          tagLine={
            "A hands-off solution for getting higher rankings and being more visible online."
          }
          perkList={[
            "We optimise your profile, so that you constantly rank high on local searches.",
            "We save you time, by helping you avoid the hassle of managing your profile",
          ]}
          furtherPerkList={[
            "Responding to reviews",
            "Keeping your details up to date",
            "Monitoring spam",
            "Curating Q&A's",
            "Making social posts",
          ]}
        /> */}
      </div>
      <div className="contact-container">
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="contact-wrapper"
        >
         
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Package
      </h2>
      <div className="packages-container">
        <Item
          serviceName={"Starter"}
          price={"4 000"}
          salePrice={"3 000"}
          tagLine={"Get started on the right track, and ensure your success"}
          perkList={["Web development", "Google Business profile set up"]}
        />
        {/* <Item
          serviceName={"Google Business Pack"}
          price={"800 Once-off<br/>+<br/>R750p/m"}
          tagLine={"Make your presence felt on Google"}
          perkList={[
            "Google Business Profile set up",
            "Google Business Profile management",
          ]}
        /> */}
      </div>
      <small
        className="disclaimer"
        style={{
          textAlign: "center",
          fontFamily: "Inter",
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        Price, and turnaround time may vary depending on complexity of project
      </small>
    </section>
  );
};

export default Services;
