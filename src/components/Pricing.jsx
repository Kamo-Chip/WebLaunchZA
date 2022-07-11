import React from 'react';
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className='pricing' id="pricing">
        <h1>Plans</h1>
        <div className='pricing-container'>
            <div className='tiers-container'>
                <div className='tier'>
                    <h2>Landing Page</h2>
                    <span className="sticker" style={{
                        position: "sticky",
                        backgroundColor: "greenyellow",
                        border: "solid #000 1px",
                        borderRadius: "5px",
                        transform: "rotate(-10deg) translate(-60%, -100px)",
                        padding: ".5em",
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
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="6V7RC9BQB27T2"/>
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
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
            <div className='addon'>
                <span style={{
                    backgroundColor: "gold",
                    border: "solid #000 1px",
                    borderRadius: "5px",
                    color: "#",
                    padding: ".5em",
                    fontWeight: "bold"
                }}>ADD-ON</span>
                <h2>Website management</h2>
                <span>$50/m</span>
                <p>Let us handle the admin of your website so you can focus on doing what you do best.</p>
                <ul>
                    <li>Keeping your design and content up-to-date</li>
                    <li>Troubleshooting any problems with servers</li>
                    <li>Etc.</li>
                </ul>
            </div>
        </div>
        {/* <span style={{alignSelf: "center"}}>Refer a friend & save</span> */}
    </div>
  )
}

export default Pricing