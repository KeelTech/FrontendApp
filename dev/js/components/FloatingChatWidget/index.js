import React, { useState } from 'react';
import ChatWidget from '@components/ChatWidget';
import { floatingChat } from './style.js';

const FloatingChatWidget = ()=>{

    const [showChat, setChatVisiblity] = useState(false);

    const toggleChat = ()=>{
        setChatVisiblity(val=>!val);
    }
    return(
        <div>
            <div className={floatingChat} onClick={toggleChat}>
                <img src={ASSETS_BASE_URL+"/images/common/chat.svg"} alt="chat"/>
            </div>
            {
                showChat && <ChatWidget toggleChat={toggleChat} floatingChat/>
            }
        </div>
    )
}

export default FloatingChatWidget;