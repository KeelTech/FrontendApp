import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import ChatCard from './ChatCard.js';
import { container, chatWidget, msgWidget, mobileChatView } from './style.js';
import { sendChatMessage, getChatMessages } from '@actions';


const ChatWidget = ({ floatingChat=false, toggleChat, caseId="", currentUserId="" })=>{

    const mainClass = cx({
        [container]: true,
        [mobileChatView]: floatingChat,
    })

    const chatData = useSelector(state=>state.CHAT);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(floatingChat){
            document.body.style.overflow="hidden";
        }
        if(caseId){
            getChatMessages(caseId, {limit:20, offset:0}, dispatch)
        }
        return ()=>{
            document.body.style.overflow="";
        }
    },[floatingChat])

    const [inputMessage, setinputMessage] = useState("");

    const sendButtonHandler = (e,v) => {
        if(inputMessage && inputMessage.length < 256) {
            sendChatMessage({"message": inputMessage, "case_id": caseId}, (res,err) => {
                if(caseId){
                    getChatMessages(caseId, {limit:20, offset:0}, dispatch)
                }
                setinputMessage("")
            })
        }
    }

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
                <ChatCard floatingChat={floatingChat} messages={chatData.chatMessages} currentUserId={currentUserId}/>
            </div>
            <div className={msgWidget({floatingChat})}>
                <div className="chatbox">
                    <input type="text" className="" placeholder="Write your message..." value={inputMessage} onChange={(e)=>setinputMessage(e.target.value)}/>
                    <div className="sendWidget">
                        {/* <img className="attachment" src={ASSETS_BASE_URL+"/images/common/attachment.svg"} alt="attachment"/> */}
                        <div className="sendBtn" onClick={sendButtonHandler}>
                            <span></span>
                            <img className="icon" src={ASSETS_BASE_URL+"/images/common/sendIcon.svg"} alt="send"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWidget;