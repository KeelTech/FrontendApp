import React from 'react';
import { chatBox } from './style.js';

const ChatCard = ({ floatingChat = false, messages = [], currentUserId="" })=>{

    return(
        <div className={chatBox({floatingChat})}>
            {
                messages.map((val, key)=>{
                    let { isReceiver=true, message, created_at, sender } = val;
                    isReceiver = currentUserId != sender
                    created_at = (new Date(created_at)).toLocaleString()
                    return (
                        <div className={isReceiver?'receiver':'sender'} key={key}>
                            <div className="msg">
                                <span className="chatMsg">{message}</span>
                                {
                                    created_at?<span className="msgTime">{created_at}</span>:null
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