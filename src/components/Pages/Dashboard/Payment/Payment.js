import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JvlSYBrhaOsC2M2PY6d3CVDobFOZsRUJD3NpziMMjZw9MnaPcDs7lV2y1UEYY00eZvPjolWZSPN8Gw3ffQIN2Ua00VYkM3NhX"
);
const Payment = () => {
  const { appoinmentID } = useParams();
  const [appoinment, setAppoinment] = useState({});

  useEffect(() => {
    const url = `https://polar-thicket-34206.herokuapp.com/appoinment/${appoinmentID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppoinment(data));
  }, [appoinmentID]);

  return (
    <div>
      <h2>
        Appoinment for: {appoinment?.patientName} for {appoinment?.name}{" "}
      </h2>
      <h3>You Have to pay: ${appoinment?.price} 😊 </h3>

      {appoinment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm appoinment={appoinment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
