// import client1 from "../public/obles.jpg";
// import client2 from "../public/matnomz.jpg";
// import client3 from "../public/mthombeni.jpg";
import Testimonial from "../components/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="testimonials" id="testimonials">
      <h1>What Clients Are Saying About Us</h1>
      <div className="testimonialsContainer">
        <Testimonial
          imgSrc="/clearview.png"
          testimonialText="Clearview is delighted with the service received from WebLaunchZA, our requirements were understood, alignment communication was kept throughout, with a  timeous response and the website was completed satisfactorily."
          siteLink="https://clearviewgroup.net.za/"
          clientDetails="Maxwell, Clearviewgroup"
        />
        <Testimonial
          imgSrc="/matnomz.JPG"
          testimonialText="WebLaunchZA helped us set up our Google business profile and develop a
          website. They made the process extremely easy for us and always kept
          us up to date on the status of things. I would definitely recommend
          them."
          siteLink="https://matnomzkennels.business.site"
          profileLink="https://goo.gl/maps/sqozschtPHEaE1BJ6"
          clientDetails="Ohimane, Matnomz Frenchies"
        />
        <Testimonial
          imgSrc="/obles.jpg"
          testimonialText="Throughout the whole project, WebLaunchZA
            supported us and exceeded our expectations. Our experience was personal and friendly, and their ability to identify
            and present our key messages in an imaginative and creative way gave
            us a huge amount of confidence in them."
          siteLink="https://oblesremoval.vercel.app/"
          clientDetails="Lesley, Obles Removal"
        />

        <Testimonial
          imgSrc="/mthombeni.webp"
          testimonialText="In a competitive industry such as construction, we’re always looking for a way to get an edge. WebLaunchZA has made it easy
          for us to get great results from our profile without having to do
          any of the work ourselves."
          profileLink="https://goo.gl/maps/Upp4vkENjxSDzE8u8"
          clientDetails="Jethro, Mthombeni Holdings And Projects"
        />
      </div>
    </section>
  );
};

export default Testimonials;
