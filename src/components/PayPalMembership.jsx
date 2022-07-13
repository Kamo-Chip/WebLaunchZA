import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "../styles/PayPal.css";

const PayPalMembership = (props) => {
  const { product } = props;
  const [error, setError] = useState(null);

  if (error) {
    alert("Payment could not be processed");
  }

  return (
    // <PayPalScriptProvider options={{
    //   "client-id": "Ab-8_AfIvO91deyFXdsUQrmJU1IypjmGcTjkIyoKkj1yDLkUocN6Ft25wcaSjny1U6UGvpu7h-KtGcbY",
    //   intent: "subscription",
    //   vault: true,
    // }}>
      <PayPalButtons
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            "plan_id": "P-8HJ67103B77403344MLHLZHI",
          });
        }}
        onApprove={(data, actions) => {
          alert("Thank you for your purchase");
        }}
        // onCancel={() => {
        //   alert("You're passing up a good thing here");
        // }}
        // onError={(err) => {
        //   setError(err);
        //   console.log(err);
        // }}
      />
    // </PayPalScriptProvider>
  );
};

export default PayPalMembership;
