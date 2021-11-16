import React, { useEffect, useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

const CheckOutForm = ({ appoinment }) => {
  const { price, patientName, _id } = appoinment;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [success, setSucces] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://polar-thicket-34206.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("this is a error: ", error);
      setCardError(error.message);
      setSucces("");
    } else {
      setCardError("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setSucces("");
    } else {
      setCardError("");
      // console.log(paymentIntent);
      setSucces("Payment success");
      setProcessing(false);
      // saveto database 
      const payment = {
        amount: paymentIntent.amount,
        transaction: paymentIntent.client_secret.slice('_secret')[0],
        created: paymentIntent.created,
        last4: paymentMethod.card?.last4
      }
      const url = `https://polar-thicket-34206.herokuapp.com/appoinment/${_id}`
      fetch(url, {
        method: "PUT",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(payment)
      }).then(res=> res.json())
      .then(data => console.log(data))
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>
        )}
      </form>
      {cardError && <p style={{ color: "red" }}>{cardError}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckOutForm;
