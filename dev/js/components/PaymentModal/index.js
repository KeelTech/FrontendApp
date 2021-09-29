import React, { useState, useEffect } from 'react';
import PaymentFailureModal from './PaymentFailureModal.js';
import PaymentSuccessModal from './PaymentSuccessModal.js';

var card, stripe;

const PaymentModal = ({ togglePaymentModal=()=>{}, paymentInfo={}, onSuccess=()=>{}  })=>{
    const { selectedClientSecret='', priceToPay='' } = paymentInfo;
    const [showPopup, setPopup] = useState(true);
    const [showSuccessPopup, setSuccessPopup] = useState(false);
    const [showFailurePopup, setFailurePopup] = useState(false);

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
          .confirmCardPayment(selectedClientSecret, {
            payment_method: {
              card
            }
          })
          .then(function(result) {
            if (result.error) {
              // Show error to your customer
              setFailurePopup(true);
              //alert(result.error.message);
            } else {
              // The payment succeeded!
              setSuccessPopup(true);
              onSuccess();
              //alert(result.paymentIntent.id);
            }
          }).catch((e)=>{
              console.log('error is',e);
          })
        }catch(e){
            console.log(e);
        }
        
    };

    const mainPaymentModal = ()=>{
        setPopup(false);
        setSuccessPopup(false);
        setFailurePopup(false);
        togglePaymentModal();
    }

    if(showSuccessPopup){
        return <PaymentSuccessModal mainPaymentModal={mainPaymentModal}/>
    }

    if(showFailurePopup){
        return <PaymentFailureModal mainPaymentModal={mainPaymentModal}/>
    }
    return(
        <div>
            <form id="payment-form"></form>
            <div className={`commonPopUpOverlay ${showPopup?'':'d-none'}`}>
                
                <div className="commonPopUpConten PayPopup">
                    <img className="closePop" src={ASSETS_BASE_URL + "/images/common/x.svg"} alt="time" onClick={mainPaymentModal}/>
                    <div className="payData">
                        <h2>Pay</h2>
                        <h4>{priceToPay}</h4>
                    </div>
                    <div className="payButtons">
                        <button className=""><img className="" src={ASSETS_BASE_URL + "/images/common/credit-card.svg"} alt="card" />Pay via Card</button>
                        <div id="card-element"></div>
                        <div className="popBtn">
                            <button className="ProceedBtnPop" onClick={payWithCard}>Pay</button>
                        </div>
                        {/* <button className=""><img className="" src={ASSETS_BASE_URL + "/images/common/upi.svg"} alt="upi" />Pay via UPI</button> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PaymentModal;