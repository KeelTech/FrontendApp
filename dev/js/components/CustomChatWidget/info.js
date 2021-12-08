import React from 'react';

const InfoView = ({ left=false})=>{

    return(
        <div className={`msg ${left?'left-msg':'right-msg'}`}>
        <div className="msg-img">
        </div>
        <div className="msg-bubble">
            <div className="msg-text">
                <p><strong>Do you have a Canadian educational credential?</strong>t's your choice?</p>
                <div className="listingChat">
                    <ul>
                        <li>You must have been physically present in Canada and have been enrolled in full-time
                            study for at least eight months.</li>
                        <li>You must not have studied in a program in which distance learning amounted to more
                            than 50% of the program of study.</li>
                        <li>You must not have studied French or English (as language classes, not studies in
                            French or English) for more than 50% of the program of study.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InfoView;
