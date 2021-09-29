import React, { useState, useEffect } from 'react';

var card, stripe;

const PaymentModal = ({payment_client_secret=''})=>{
console.log({STRIPE_API_KEY});
    useEffect(()=>{
        try{
            stripe = Stripe(STRIPE_API_KEY);
            var elements = stripe.elements();
            var style = {
                base: {
                    color: "#32325d",
                    fontFamily: 'Arial, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                        color: "#32325d"
                    }
                },
                invalid: {
                    fontFamily: 'Arial, sans-serif',
                    color: "#fa755a",
                    iconColor: "#fa755a"
                }
            };
            card = elements.create("card", { style: style });
            card.mount("#card-element");
        }catch(e){

        }
    },[])

    var payWithCard = function() {
        //loading(true);
        try{
            stripe
          .confirmCardPayment(payment_client_secret, {
            payment_method: {
              card
            }
          })
          .then(function(result) {
            if (result.error) {
              // Show error to your customer
              alert(result.error.message);
            } else {
              // The payment succeeded!
              alert(result.paymentIntent.id);
            }
          }).catch((e)=>{
              console.log('error is',e);
          })
        }catch(e){
            console.log(e);
        }
        
    };

    return(
        <div>
            <div id="card-element"></div>
            <form id="payment-form"></form>
        </div>
    )

}

export default PaymentModal;