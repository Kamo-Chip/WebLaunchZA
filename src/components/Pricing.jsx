import React from 'react';
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className='pricing' id="pricing">
        <h1>Plans</h1>
        <div className='tiers-container'>
            <div className='tier'>
                <h2>Landing Page</h2>
                <span style={{
                    position: "absolute",
                    backgroundColor: "greenyellow",
                    border: "solid #000 1px",
                    borderRadius: "5px",
                    transform: "rotate(-10deg) translate(-100%, -20px)",
                    padding: ".5em"
                }}><b>Most popular</b></span>
                <span>$100</span>
                <ul>
                    <li>Make your mark online with a web page that's all about <b>you</b></li>
                    <li>We will convert your followers into an audience by directing them to all your socials</li>
                </ul>
                <button>Buy</button>
            </div>
            <div className='tier'>
                <h2>Blog</h2>
                <span>$300</span>
                <ul>
                    <li>Avoid the cookie cutter templates and create something that's uniquely <b>you</b></li>
                </ul>
                <button>Buy</button>
            </div>
            <div className='tier'>
                <h2>Merch/Product store</h2>
                <span>$1000</span>
                <ul>
                    <li>E-commerce site</li>
                    <li>Sell your merch & other affiliate products</li>
                </ul>
                <button>Buy</button>
            </div>
            <div className='tier'>
                <h2>Hub</h2>
                <span>$3000 +</span>
                <ul>
                    <li>An integration of all our services to create your true hub</li>
                    <li>Multi-page site</li>
                </ul>
                <button>Buy</button>
            </div>
        </div>
        <span style={{alignSelf: "center"}}>Refer a friend & save</span>
    </div>
  )
}

export default Pricing