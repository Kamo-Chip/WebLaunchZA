import React from "react";
import "../styles/Faq.css";
import { BiLinkExternal } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQs = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" className="faq">
      <h1>FAQs</h1>
      <div className="faq-container">
        <div>
          <section data-aos="fade-left">
            <h3>How fast will I receive my website?</h3>
            <p>
              Expect results within 1 week. However, more complex requests can
              take longer.
            </p>
          </section>
          <section data-aos="fade-right">
            <h3>How do I request a site? </h3>
            <p>
              Send an email to{" "}
              <a
                href="mailto:hellomakersdev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              <BiLinkExternal />
            </p>
          </section>
          <section data-aos="fade-left">
            <h3>What if I don't like the website? </h3>
            <p>
              This is very unlikely, but in the off chance that this happens we
              will revise the site until you're 100% satisfied.
            </p>
          </section>
          <section data-aos="fade-right">
            <h3>How do I host my site?</h3>
            <p>
              We build the website. We assume that you have a domain and hosting
              set up. If none of this makes sense to you, we can do it for you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
