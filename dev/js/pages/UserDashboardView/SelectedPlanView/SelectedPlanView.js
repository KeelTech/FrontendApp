import React from 'react';

const SelectedPlanView = ({ selectedUpgradePlan, redirectDashboard, first_name })=>{

    const { currency='', description='', discount='', id='', price='', sgst='', title='', cgst=''} = selectedUpgradePlan||{};

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
                            <button>Proceed to Payment</button>
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