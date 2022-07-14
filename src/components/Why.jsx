import React from "react";
import Rocket from "../images/rocket.png";
import "../styles/Why.css";

const Why = () => {
  return (
    <div className="why">
      <h1>Why MakersDev?</h1>
      <div className="why-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>At MakersDev we:</p>
          <ul>
            <li>
              Establish your online presence by crafting websites that convert
              viewers into an <b>audience</b>
            </li>
            <li>
              Specialise in creating websites that present your brand in a
              unique way
            </li>
            <li>Showcase your voice and personality</li>
            <li>Enable you to become platform independent</li>
            <li>
              Open up opportunities for <b>growth</b> and <b>revenue</b>
            </li>
          </ul>
          <p>
            Ready to make your dent on the internet? Pick a plan & we'll see
            your ideas through from concept to production
          </p>
        </div>
        <img src={Rocket} alt="Rocket" />
      </div>
    </div>
  );
};

export default Why;
