import React, {useEffect} from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const currency = "USD";
const style = {layout: "vertical"};

export const CheckoutButtons = ({amount}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXjM7W6ESHLm61mHWZisZqHUVjIr20-t0yuv72giOsPW1ttkk3n5yS19YA5AYc0En58xuiAuTBlrCiZV",
        components: "buttons",
        currency: "USD",
        // "enable-funding": "venmo",
      }}
    >
      <ButtonWrapper currency={currency} showSpinner={false} amount={amount} />
    </PayPalScriptProvider>
  );
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({currency, showSpinner, amount}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{options, isPending}, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <React.Fragment>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </React.Fragment>
  );
};
