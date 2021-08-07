import React from 'react';
import { chatBox } from './style.js';

const ChatCard = ({ floatingChat = false, messages = [] })=>{

    return(
        <div className={chatBox({floatingChat})}>
            {
                messages.map((val, key)=>{
                    const { isReceiver, text, time } = val;
                    return (
                        <div className={isReceiver?'receiver':'sender'} key={key}>
                            <div className="msg">
                                <span className="chatMsg">{text}</span>
                                {
                                    time?<span className="msgTime">{time}</span>:null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default ChatCard;