import React from 'react';
// import ChatIco from "../../../../assets/images/common/keel.svg"

const Message = ({data})=>{
    const { left=false, is_active } = data;
    return(
        <div className={`msg ${left?'left-msg':'right-msg'}`}>
            <div className="msg-img msg-type">

            </div>

            <div className="msg-bubble">
                <div className="msg-info">
                    <div className="msg-info-name">Dummy User</div>
                    <div className="msg-info-time">11:10</div>
                </div>

                <div className="msg-text">
                    Hi, welcome to chat! Go ahead and send me a message. 😄
                </div>
            </div>
        </div>
    )
}

export default Message;