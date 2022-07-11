import React from 'react';
import "../styles/Faq.css";

const FAQs = () => {
  return (
    <div className='faq'>
        <h1>FAQs</h1>
        <div className='faq-container'>
          <div>
            <section>
              <h3>How fast will I receive my website?</h3>
              <p>Expect results within 5-6 days. However, more complex requests can take longer.</p>
            </section>
            <section>
              <h3>How do I request a site? </h3>
              <p>Choose your desired plan. You will then be directed to a PayPal payment gateway. After paying you can message us on 
                Twitter where we will discuss your site. </p>
            </section>
            <section>
              <h3>What if I don't like the website? </h3>
              <p>The possibility of this happening is the same as seeing a rhino riding on the back of a flamingo that's being chased by 
                a leprachaun - pretty unlikely, but in the off chance that this happens we will revise the site until you're 100% satisfied.</p>
            </section>
            <section>
              <h3>How do I host my site?</h3>
              <p>We build the website. We assume that you have a domain and hosting set up. If none of this makes sense to you. Consider subscribing to our membership plan where we handle all the nitty gritty details for you. </p>
            </section>
          </div>
        </div>
    </div>
  )
}

export default FAQs