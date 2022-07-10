import React from 'react';
import Rocket from "../images/rocket.png";
import "../styles/Why.css";

const Why = () => {
  return (
    <div className='why'>
        <h1>Why MakersDev?</h1>
        <div>
            <div  style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "100px"
            }}>
              <p>Web development for creators looking to rocket themselves to a new level</p>
              <p>Every creator needs a hub - a place on the internet that's uniquely <b>yours</b>. 
                At MakersDev we specialise in creating digital hubs for creators, which enables you
                to gain control of your audience & also become platform independent. This opens up more
                opportunities for <b>growth</b> & <b>revenue</b>, while also establishing you as an authority figure on the web!
              </p>
              <p>Pick a plan & we'll see all your ideas through from concept to development</p>
              <ul>
                <li>Expect results within 5-7 days*</li>
              </ul>
            </div>
            <img src={Rocket} alt="Rocket"/>
        </div>
    </div>
  )
}

export default Why