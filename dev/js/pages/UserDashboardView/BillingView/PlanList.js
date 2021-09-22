import React from 'react';

const PlanList = ({ first_name, planClick, planData })=>{

    return(
        <div className="planSelectionScreen">
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
                <h5>You are currently on FREE PLAN</h5>
                <button>Express Entry</button>
                <p>This can be some text related to this plan and some more details if needed.</p>
            </div>
        </div>
        <div className="planCardSection">
            <div className="tabButtonPlan">
                <button className="actPlan">Pending Payments <span className="notiPus">2</span>    </button>
                <button>Plans</button>
            </div>
            <div className="row">
                {
                    planData.map((val, key)=>{
                        const { actualPrice, dealPrice, isPopular, planName, isActive } = val;
                        return <div className="col-md-4 col-12 mb-4 " key={key}>
                            <div className="planPurchaseCard">
                                {
                                    isPopular?<span className="popularPlan">recommended</span>:null
                                }
                                <div className="planPrices">
                                    <h2>{planName}</h2>
                                    {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/plan.svg"} /> */}
                                    <p>{actualPrice}<span>{dealPrice}</span></p>
                                </div>
                                <div className="planPurchaseCont">
                                    <button onClick={()=>planClick(val)}>Upgrade Plan</button>
                                    <ul>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/tick_green_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
                                        <li><img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/cross_with_circle.svg"} />Some Pointer related the plan</li>
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