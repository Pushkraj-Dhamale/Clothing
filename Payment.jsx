import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button } from '@chakra-ui/react';
import '../payment.css';
import { addOrder, deleteOrder } from "../services/OrderServices";

import CheckoutForm from "../components/ChackoutForm";
import ChackoutForm from "../components/ChackoutForm";


const stripePromise = loadStripe('sk_test_51NxPlVSC9F991Uibai3IH1tJRkshsaw2Wif0e0YHqFvqJe0L9Zzs28mbtVJnMJclmfMBVMgVl91VPpfdja9IzMdl00rV4x6Pte');
const couunt=0; 

function StripePayment() {
  const location = useLocation();
  const [orderId, setOrderId] = useState("");
  const { price, address, products, user } = location.state; // Get the price and address from state
  // console.log(produc
  

  
    
 

  const [product, setProduct] = useState({
    name: "TrendWave",
    price: price,
    productOwner: "TrendWave",
    description:
      "This is a payment gateway",
    quantity: 1,
  });

  const makePayment = async () => {
    addOrder(products, user, address)
    .then((result) => {
      setOrderId(result.newOrder._id);
    });
    // sessionStorage.setItem('currentUser', JSON.stringify(user));
    const stripe = await loadStripe("pk_test_51NxPlVSC9F991UibZynf1a9Ledrih18r2pSWBMR2r1VLGCWN69OkZMnb3dkLGUxsiOF7GSzKBsWarXxrow9RrVAR00mjTMAqW0");
    const body = { product,user };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:4000/create-checkout",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
    products=null;
  };

  return (
    <>
      <Button colorScheme="blue" onClick={makePayment}>
        Buy Now for {product.price}
      </Button> </>


  );
}
export default StripePayment;