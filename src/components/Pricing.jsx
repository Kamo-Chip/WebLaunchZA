import React from "react";
import "../styles/Pricing.css";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Pricing = () => {
  const landingPage = {
    description: "Landing page",
    price: 299.0,
  };

  const blog = {
    description: "Blog",
    price: 499.0,
  };

  const ecommerce = {
    description: "Product Store",
    price: 1599.0,
  };

  const hub = {
    description: "Hub",
    price: 4999.0,
  };

  const personal = {
    description: "Personal Site",
    price: 599.0,
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Afeh1bbkCUA3YyD5xSWkTu8Rl9wr7JnWVjSCdYfN4GfZLzilY-a2tt4BANXr5vwb7-_A7Lh3CL0KAXUA",
      }}
    >
      <div className="pricing" id="pricing">
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ marginBottom: "0" }}>Services</h1>
          <p style={{ textAlign: "center", justifyContent: "center" }}>
            *All our sites are custom and responsive
          </p>
        </div>
        <div className="pricing-container">
          <div className="tiers-container">
            <div className="tier">
              <h2>Landing Page</h2>
              <span
                className="sticker"
                style={{
                  position: "absolute",
                  backgroundColor: "greenyellow",
                  border: "solid #000 1px",
                  borderRadius: "5px",
                  transform: "rotate(-10deg) translate(-60%, -30px)",
                  padding: ".5em",
                }}
              >
                <b>Most popular</b>
              </span>
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="price" style={{ marginBottom: "1rem" }}>
                  ${landingPage.price}
                </span>
                <span>
                  Attract attention to your product with a high conversion page
                </span>
                <ul>
                  <li>1 page</li>
                  <li>Lead capture</li>
                  <li>We handle the copy</li>
                </ul>
              </div>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={landingPage} />
              </div>
            </div>
            <div className="tier">
              <h2>Blog</h2>
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="price" style={{ marginBottom: "1rem" }}>
                  ${blog.price}
                </span>
                <span>
                  Escape the cookie cutter templates and get your thoughts out
                  into the world
                </span>
                <ul>
                  <li>Email subscription</li>
                  <li>Commenting option</li>
                  <li>Content Management System</li>
                </ul>
              </div>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={blog} />
              </div>
            </div>
            <div className="tier">
              <h2>Personal Page</h2>
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="price" style={{ marginBottom: "1rem" }}>
                  ${personal.price}
                </span>
                <span>Be seen. Be heard</span>
                <ul>
                  <li>3 pages {"(Home, About, Contact)"}</li>
                  <li>We handle the copy</li>
                  <li>Consistent branding</li>
                  <li>Lead capture</li>
                </ul>
              </div>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={personal} />
              </div>
            </div>
            <div className="tier">
              <h2>Product Store</h2>
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="price" style={{ marginBottom: "1rem" }}>
                  ${ecommerce.price}
                </span>
                <span>Get your products out into the world</span>
                <ul>
                  <li>20 products</li>
                  <li>Stripe & PayPal integration</li>
                  <li>Premium checkout process</li>
                </ul>
              </div>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={ecommerce} />
              </div>
            </div>
            <div className="tier">
              <h2>Hub</h2>
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span className="price" style={{ marginBottom: "1rem" }}>
                  ${hub.price}
                </span>
                <span>Your own kitted out space on the internet</span>
                <ul>
                  <li>
                    6 pages{" "}
                    {
                      "(Home, About, Contact, Blog, Products, and a page of your own choosing)"
                    }
                  </li>
                  <li>Includes all the benefits of the other plans</li>
                </ul>
              </div>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={hub} />
              </div>
            </div>
            <div className="addon">
              <span
                style={{
                  backgroundColor: "gold",
                  border: "solid #000 1px",
                  borderRadius: "5px",
                  color: "#000",
                  padding: ".5em",
                  fontWeight: "bold",
                }}
              >
                ADD-ON
              </span>
              <h2>Website management</h2>
              <span className="price">$24.99/m</span>
              <p>
                Let us handle the admin of your website so that you can focus on
                doing what you do best - creating content!
              </p>
              <ul>
                <li style={{ listStyle: "disc" }}>
                  Keeping your design and content up-to-date
                </li>
                <li style={{ listStyle: "disc" }}>
                  Troubleshooting any problems with servers
                </li>
              </ul>
              <a
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8HJ67103B77403344MLHLZHI"
                target="_blank" rel="noreferrer"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default Pricing;
