import React from 'react';
import { cx } from '@emotion/css';
import ChatCard from './ChatCard.js';
import { container, chatWidget, msgWidget, mobileChatView } from './style.js';

const ChatWidget = ({ floatingChat=false, toggleChat })=>{

    const mainClass = cx({
        [container]: true,
        [mobileChatView]: floatingChat,
    })

    return(
        <div className={mainClass}>
            <div className="header">
                <div className="profile"></div>
                <div className="nameSection">
                    <div className="name">Samantha WIlliam</div>
                    <div className="user">
                        <span className="activeUser"></span>
                        <span className="status">Online</span>
                    </div>
                </div>
                <img className="close" src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} alt="close" onClick={toggleChat}/>
            </div>
            <div className={chatWidget({floatingChat})}>
                <ChatCard floatingChat={floatingChat}/>
            </div>
            <div className={msgWidget({floatingChat})}>
                <div className="chatbox">
                    <input type="text" className="" placeholder="Write your message..."/>
                    <div className="sendWidget">
                        <img className="attachment" src={ASSETS_BASE_URL+"/images/common/attachment.svg"} alt="attachment"/>
                        <div className="sendBtn">
                            <span>Send</span>
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/sendIcon.svg"} alt="send"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWidget;