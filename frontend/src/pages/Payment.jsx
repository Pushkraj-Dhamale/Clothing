import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Button } from '@chakra-ui/react';
import '../payment.css';

import CheckoutForm from "../components/ChackoutForm";


const stripePromise = loadStripe('sk_test_51NxPlVSC9F991Uibai3IH1tJRkshsaw2Wif0e0YHqFvqJe0L9Zzs28mbtVJnMJclmfMBVMgVl91VPpfdja9IzMdl00rV4x6Pte');

 
function StripePayment() { 
  const [product, setProduct] = useState({ 
    name: "Go FullStack with KnowledgeHut", 
    price: 1000, 
    productOwner: "KnowledgeHut", 
    description: 
      "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.", 
    quantity: 1, 
  }); 

  const makePayment = async () => { 
    const stripe = await loadStripe("pk_test_51NxPlVSC9F991UibZynf1a9Ledrih18r2pSWBMR2r1VLGCWN69OkZMnb3dkLGUxsiOF7GSzKBsWarXxrow9RrVAR00mjTMAqW0"); 
    const body = { product }; 
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
  }; 
 
  return ( 
    <>
    <button variant="primary" onClick={makePayment}> 
          Buy Now for {product.price} 
        </button> </>
        
       
  ); 
}  
export default StripePayment;