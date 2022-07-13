import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [error, setError] = useState(null);

  if (error) {
    alert("Payment could not be processed");
  }

  return (
    
    <PayPalButtons
      style={{
        shape: "pill",
        tagline: false,
        
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);

        alert("Thank you for your purchase");
      }}
      onCancel={() => {
        alert("You're passing up a good thing here");
      }}
      onError={(err) => {
        setError(err);
        console.log(err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
