import React from 'react';

const PaymentFailureModal = ({ mainPaymentModal })=>{

    return(
        <div className="commonPopUpOverlay">
            <div className="commonPopUpConten">
                <img className="closePop" src={ASSETS_BASE_URL + "/images/common/x.svg"} alt="time" onClick={mainPaymentModal}/>
                <div className="popCntrImg">
                <img src={ASSETS_BASE_URL + "/images/common/wrong.svg"} alt="time" />
                </div>
                <p>Failed</p>
                {/* <p className="popSubPera">Redirect to homepage to access the service right now</p> */}
                <div className="popBtn">
                    <button className="ProceedBtnPop" onClick={mainPaymentModal}>Proceed To Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentFailureModal;