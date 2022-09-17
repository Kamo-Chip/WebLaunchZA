import "../styles/Logo.css";
import { Link } from "react-scroll";
import { GrMenu } from "react-icons/gr";

const Logo = () => {
  let trackNav = true;
  const showNav = () => {
    const nav = document.querySelector(".navigation");
    if (trackNav) {
      nav.style.display = "flex";
      trackNav = false;
    } else {
      nav.style.display = "none";
      trackNav = true;
    }
  };

  return (
    <div className="logo">
      <span>{"</> MakersDev"}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="navigation">
          <ul className="list">
            <li className="list-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <GrMenu className="menu-icon" onClick={showNav} size="1.7rem"/>
      </div>
    </div>
  );
};

export default Logo;
