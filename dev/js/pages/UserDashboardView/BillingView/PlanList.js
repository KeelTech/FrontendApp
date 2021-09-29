import React, { useState } from 'react';
import PaymentModal from '@components/PaymentModal'

let checkedIcon = `${ASSETS_BASE_URL}/images/common/tick_green_circle.svg`;
let unCheckedIcon = `${ASSETS_BASE_URL}/images/common/cross_with_circle.svg`;

const PlanList = ({ first_name, planClick, planData, pendingPayment = [], caseInfo = {}, refetchPaymentList }) => {

    const [activeTab, setTab] = useState(pendingPayment.length ? 0 : 1);
    const [showPaymentPopup, setPaymentPopup] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState({
        selectedClientSecret: '',
        priceToPay: ''
    })

    const payPendingPrice = (paymentData) => {
        const { front_end_transaction_identifier='', order_total_amount='', currency='' }= paymentData;
        setPaymentPopup(val=>!val);
        setPaymentInfo({
            selectedClientSecret: front_end_transaction_identifier,
            priceToPay: `${currency} ${order_total_amount}`
        })
    }

    const togglePaymentModal = ()=>{
        setPaymentPopup(false);
        setPaymentInfo({
            selectedClientSecret: '',
            priceToPay: ''
        })
    }

    const { plan = {} } = caseInfo;

    return (
        <div className="planSelectionScreen">
            {
                showPaymentPopup?<PaymentModal showPaymentPopup={showPaymentPopup} togglePaymentModal={togglePaymentModal} paymentInfo={paymentInfo} onSuccess={refetchPaymentList}/>:null
            }
            <div className="dashMainHeading">
                <h2>Welcome {first_name}</h2>
                <div className="breadCrumb">
                    <a>Dashboard</a>
                </div>
            </div>
            <div className="selectPlan">
                <div className="plnImgTop">
                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} />
                </div>
                <div className="plnTopHeading">
                    <h5>You are currently on {plan && plan.name ? plan.name : 'FREE PLAN'}</h5>
                    <button>Express Entry</button>
                    {/* <p>This can be some text related to this plan and some more details if needed.</p> */}
                </div>
            </div>
            <div className="planCardSection">
                <div className="tabButtonPlan">
                    {
                        pendingPayment.length ? <button className={activeTab == 0 ? "actPlan" : ""} onClick={() => setTab(0)}>Pending Payments <span className="notiPus">{pendingPayment.length}</span></button> : null
                    }
                    <button className={activeTab == 1 ? "actPlan" : ""} onClick={() => setTab(1)}>Plans</button>
                </div>
                <div className="row">
                    {
                        activeTab == 0 ?
                            pendingPayment.map((val, key) => {
                                const { order_details = {}, order_total_amount='' } = val;
                                const { currency = '', order_items = [] } = order_details;
                                let totalSum = 0;
                                return <div className="col-md-4 col-12 mb-4 " key={key}>
                                    <div className="planPurchaseCard">
                                        {
                                            order_items.map((order, orderkey) => {
                                                const { plan_details = {}, payable_amount = '' } = order;
                                                const { title = '', currency: orderCurrency } = plan_details;
                                                totalSum += payable_amount;
                                                return <div className="planPrices" key={orderkey}>
                                                    <h2>{title}</h2>
                                                    <p>{`${orderCurrency} ${payable_amount}`}</p>
                                                </div>
                                            })
                                        }
                                        <div className="planPurchaseCont">
                                            <button onClick={() => payPendingPrice(val)}>Pay {currency} {order_total_amount}</button>
                                        </div>
                                    </div>
                                </div>
                            })
                            : planData.map((val, key) => {
                                const { currency, discount, price, isPopular = false, title, isActive, check_list = [] } = val;
                                return <div className="col-md-4 col-12 mb-4 " key={key}>
                                    <div className="planPurchaseCard">
                                        {
                                            isPopular ? <span className="popularPlan">recommended</span> : null
                                        }
                                        <div className="planPrices">
                                            <h2>{title}</h2>
                                            {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} /> */}
                                            <p>{`${currency} ${price}`}<span>{`${currency} ${discount + price}`}</span></p>
                                        </div>
                                        <div className="planPurchaseCont">
                                            {
                                                plan.id==val.id?<button>Current Active Plan</button>:<button onClick={() => planClick(val)}>Upgrade Plan</button>
                                            }
                                            
                                            <ul>
                                                {
                                                    check_list.map((val, key) => {
                                                        const { isChecked, text = '' } = val || {};
                                                        return <li key={key}><img className="img-fluid" src={isChecked ? checkedIcon : unCheckedIcon} />{text}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlanList;