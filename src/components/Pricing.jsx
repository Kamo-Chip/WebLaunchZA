import React from "react";
import "../styles/Pricing.css";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalMembership from "./PayPalMembership";
import Membership from "./Membership";

const Pricing = () => {
  const landingPage = {
    description: "Landing page",
    price: 100.0,
  };
  const blog = {
    description: "Landing page",
    price: 200.0,
  };
  const ecommerce = {
    description: "Landing page",
    price: 1000.0,
  };

  const hub = {
    description: "Landing page",
    price: 8000.0,
  };

  const membership = {
    description: "Landing page",
    price: 39.0,
  };

  const handlePurchase = (e) => {
    // navigate(`/purchase/${e.target.id}`);
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Ab-8_AfIvO91deyFXdsUQrmJU1IypjmGcTjkIyoKkj1yDLkUocN6Ft25wcaSjny1U6UGvpu7h-KtGcbY",
      }}
    >
      <div className="pricing" id="pricing">
        <h1>Plans</h1>
        <div className="pricing-container">
          <div className="tiers-container">
            <div className="tier">
              <h2>Landing Page</h2>
              <span
                className="sticker"
                style={{
                  position: "sticky",
                  backgroundColor: "greenyellow",
                  border: "solid #000 1px",
                  borderRadius: "5px",
                  transform: "rotate(-10deg) translate(-60%, -100px)",
                  padding: ".5em",
                }}
              >
                <b>Most popular</b>
              </span>
              <span>$100</span>
              <ul>
                <li>
                  Make your mark online with a web page that's all about{" "}
                  <b>you</b>
                </li>
                <li>
                  We will convert your followers into an audience by directing
                  them to all your socials
                </li>
              </ul>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={landingPage} />
              </div>
            </div>
            <div className="tier">
              <h2>Blog</h2>
              <span>$300</span>
              <ul>
                <li>
                  Avoid the cookie cutter templates and create something that's
                  uniquely <b>you</b>
                </li>
              </ul>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={blog} />
              </div>
            </div>
            <div className="tier">
              <h2>Merch/Product store</h2>
              <span>$1000</span>
              <ul>
                <li>E-commerce site</li>
                <li>Sell your merch & other affiliate products</li>
              </ul>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={ecommerce} />
              </div>
            </div>
            <div className="tier">
              <h2>Hub</h2>
              <span>$3000 +</span>
              <ul>
                <li>
                  An integration of all our services to create your true hub
                </li>
                <li>Multi-page site</li>
              </ul>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={hub} />
              </div>
            </div>
          </div>
          <div className="addon">
            <span
              style={{
                backgroundColor: "gold",
                border: "solid #000 1px",
                borderRadius: "5px",
                color: "#",
                padding: ".5em",
                fontWeight: "bold",
              }}
            >
              ADD-ON
            </span>
            <h2>Website management</h2>
            <span>$50/m</span>
            <p>
              Let us handle the admin of your website so you can focus on doing
              what you do best.
            </p>
            <ul>
              <li>Keeping your design and content up-to-date</li>
              <li>Troubleshooting any problems with servers</li>
              <li>Etc.</li>
            </ul>
              {/* <Membership/> */}
              <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8HJ67103B77403344MLHLZHI" target="_blank">Subscribe</a>
          </div>
        </div>
        {/* <span style={{alignSelf: "center"}}>Refer a friend & save</span> */}
      </div>
    </PayPalScriptProvider>
  );
};

export default Pricing;
