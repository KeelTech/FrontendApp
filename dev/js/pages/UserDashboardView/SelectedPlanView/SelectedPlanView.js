import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPaymentIndent } from '@actions';

var card, stripe;
const SelectedPlanView = ({ selectedUpgradePlan, redirectDashboard, first_name, planId })=>{

    const { currency='', description='', discount='', id='', price='', sgst='', title='', cgst=''} = selectedUpgradePlan||{};

    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { userInfo={} } = taskInfo;
    const { cases={} } = userInfo;
    const { case_id } = cases;

    const[paymentData, setData] = useState({});
    const { payment_client_secret='' } = paymentData||{};

    useEffect(()=>{
        const postParams = {
            "case_id": null,
            "order_items": {
                "quotation_milestone":[],
                "plan": [`${planId}`],
                "service": []
            }
        }
        getPaymentIndent(postParams, {}, (resp, err)=>{
            if(resp && resp.status ==1){
                setData(resp.data);
            }
        })
        
    },[])

    useEffect(()=>{
        if(payment_client_secret){
            try{
                stripe = Stripe(payment_client_secret);
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
        }
    },[payment_client_secret])

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

    return (
        <div className="planSelectionScreen">
            {/* Popup success
            <div className="commonPopUpOverlay d-none">
                <div className="commonPopUpConten">
                    <img className="closePop" src={ASSETS_BASE_URL + "/images/common/x.svg"} alt="time" />
                    <p>Don't give up on your dream so fast Do you really want to cancel this meeting?</p>
                    <div className="popBtn">
                        <button className="outlineBtn">No</button>
                        <button className="fillBtn">Yes</button>
                    </div>
                </div>
            </div>
            ***/}
            <div className="dashMainHeading">
                <h2>Welcome {first_name}</h2>
                <div className="breadCrumb">
                    <a onClick={(e)=>{
                        e.preventDefault();
                        redirectDashboard()
                    }}>Dashboard</a>
                    <span>&#62;</span>
                    <a>{title}</a>
                </div>
            </div>
            <div className="billingMainSection">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="planDetailsBill">
                            <h4>{title}</h4>
                            <p>{description}</p>
                            <hr />
                            <ul>
                                <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                            </ul>
                        </div>
                        <div className="subPlndDetals">
                            <div className="row">
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="clsCardDtls">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/first.svg"} />
                                        <p>Secure & Encryopted</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="clsCardDtls">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/second.svg"} />
                                        <p>Secure & Encryopted</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12 mb-4">
                                    <div className="clsCardDtls">
                                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/third.svg"} />
                                        <p>Secure & Encryopted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="orderCartCard">
                            <h4>ORDER SUMMARY</h4>
                            <table>
                                <tr>
                                    <td><p className="tblHed">Amount:</p></td>
                                    <td><p className="tblData">{`${currency} ${price}`}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="tblHed">SGST (9%):</p></td>
                                    <td><p className="tblData">+ ${currency} {cgst}</p></td>
                                </tr>
                            </table>
                            <hr />
                            <table>
                                <tr>
                                    <td><p className="tblHed">CGST (9%):</p></td>
                                    <td><p className="tblData">+ {currency} {cgst}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="tblHed">Valid Till::</p></td>
                                    <td><p className="tblData">05/01/2021</p></td>
                                </tr>
                            </table>
                            <hr />
                            <table>
                                <tr>
                                    <td><p className="tblHed">Total:</p></td>
                                    <td><p className="tblData">{currency} {price}</p></td>
                                </tr>
                            </table>
                            <div id="card-element"></div>
                            <form id="payment-form"></form>
                            <button className={payment_client_secret?"":"payment-disabled"} onClick={payWithCard}>Proceed to Payment</button>
                        </div>
                        <div className="policyData">
                            <p>There’s no refund for this service. We request you to check our <strong>Refund Policy</strong> for further details.
                            </p>
                            <p>
                                By proceeding to payment give us the permission to access your document uploaded in the our Document Vault to make the process easier. For more details, please check our <strong>Terms and Conditions</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedPlanView;