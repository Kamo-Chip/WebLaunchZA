import React, { useEffect, useRef } from 'react';
import "../styles/PayPal.css";

const PayPal = () => {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{
                        description: "Landing page",
                        amount: {
                            currency_code: "USD",
                            value: 100.00,
                        }
                    }],
                    application_context: {
                        shipping_preference: 'NO_SHIPPING'
                    }
                })
            },
            onApprove: async(data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
    }, []);

  return (
    <div className='paypal-container'>
        <div ref={paypal} className='paypal'></div>
    </div>
  )
}

export default PayPal