import React from 'react';
import { getNameInitialHelper } from '@helpers/utils';
import { chatBox } from './style.js';

const ChatCard = ({ floatingChat = false, messages = [], currentUserId="" })=>{

    return(
        <div className={chatBox({floatingChat})}>
            {
                messages.map((val, key)=>{
                    let { isReceiver=true, message, created_at, sender, sender_name='' } = val;
                    isReceiver = currentUserId != sender
                    created_at = (new Date(created_at)).toLocaleString()
                    return (
                        <div className={isReceiver?'receiver':'sender'} key={key}>
                            <div className="msg">
                                <span className="chatMsg">{message}</span>
                                {
                                    sender_name?<span className="profile">{getNameInitialHelper(sender_name)}</span>:null
                                }
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