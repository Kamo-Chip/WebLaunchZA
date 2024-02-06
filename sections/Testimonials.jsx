import Testimonial from "../components/Testimonial";
import Aos from "aos";
import "aos/dist/aos.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnFocusIn: true, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="testimonials" id="testimonials">
      <h1>What Clients Are Saying About Us</h1>
      <div className="testimonialsContainer">
        <div className="testimonialDesktop">
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
        <div className="testimonialMobile">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <Testimonial
                  imgSrc="/clearview.png"
                  testimonialText="Clearview is delighted with the service received from WebLaunchZA, our requirements were understood, alignment communication was kept throughout, with a  timeous response and the website was completed satisfactorily."
                  siteLink="https://clearviewgroup.net.za/"
                  clientDetails="Maxwell, Clearviewgroup"
                />
              </div>
              <div className="embla__slide">
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
              </div>
              <div className="embla__slide">
                <Testimonial
                  imgSrc="/obles.jpg"
                  testimonialText="Throughout the whole project, WebLaunchZA
            supported us and exceeded our expectations. Our experience was personal and friendly, and their ability to identify
            and present our key messages in an imaginative and creative way gave
            us a huge amount of confidence in them."
                  siteLink="https://oblesremoval.vercel.app/"
                  clientDetails="Lesley, Obles Removal"
                />
              </div>
              <div className="embla__slide">
                <Testimonial
                  imgSrc="/mthombeni.webp"
                  testimonialText="In a competitive industry such as construction, we’re always looking for a way to get an edge. WebLaunchZA has made it easy
          for us to get great results from our profile without having to do
          any of the work ourselves."
                  profileLink="https://goo.gl/maps/Upp4vkENjxSDzE8u8"
                  clientDetails="Jethro, Mthombeni Holdings And Projects"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
