import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatWidget from '@components/ChatWidget';
import { toggleNotificationChat } from '@actions';
import { floatingChat } from './style.js';

const FloatingChatWidget = ({ caseId, currentUserId, chatHeaderName="", isHideable=false })=>{
    const dispatch = useDispatch();
    const [showChat, setChatVisiblity] = useState(false);
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { showNotificationChatWidget } =taskInfo;
    const toggleChat = ()=>{
        if(showNotificationChatWidget){
            toggleNotificationChat({value: false}, dispatch);
            return;
        }
        setChatVisiblity(val=>!val);
    }
    return(
        <div>
            <div className={floatingChat} onClick={toggleChat}>
                <img src={ASSETS_BASE_URL+"/images/common/chat.svg"} alt="chat"/>
            </div>
            {
                (showChat || (isHideable|| showNotificationChatWidget)) && <ChatWidget toggleChat={toggleChat} floatingChat caseId={caseId} currentUserId={currentUserId} chatHeaderName={chatHeaderName}/>
            }
        </div>
    )
}

export default FloatingChatWidget;