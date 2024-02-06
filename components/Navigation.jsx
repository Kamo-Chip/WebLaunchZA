import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import LogoIcon from "../public/logo.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const Navigation = ({ blog }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");

      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      {!blog ? (
        <nav className="navigation">
          <header className="logo">
            <Link href="/">
              <Image src={LogoIcon} alt="Logo" />
              WebLaunchZA
            </Link>
          </header>
          <div className="nav-items-container">
            <div onClick={toggleNav} className="nav-icon-container">
              {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
            </div>

            <ul className="nav-list">
              {!router.pathname.includes("services") ? (
                <>
                  <li>
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={closeNav}
                      href="#"
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={closeNav}
                      href="#"
                    >
                      Testimonials
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <li>
                  <Link onClick={closeNav} href="/">
                    Home
                  </Link>
                </li>
              )}

              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeNav}
                  href="#"
                >
                  Contact
                </ScrollLink>
              </li>
              <li>
                <Link
                  href="/blog"
                  style={{
                    backgroundColor: "#00cbba",
                    color: "#fff",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navigation blogStyles">
          <header className="logo">
            <Link href="/">
              <Image src={LogoIcon} alt="Logo" />
              WebLaunchZA
            </Link>
          </header>
          <Link href="/" className="blogLink">
            <IoIosArrowBack className="blogBack" size="2.5rem" />
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
