import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import ChatCard from './ChatCard.js';
import { container, chatWidget, msgWidget, mobileChatView } from './style.js';
import { sendChatMessage, getChatMessages } from '@actions';


const ChatWidget = ({ floatingChat=false, toggleChat, caseId="", currentUserId="", chatHeaderName="" })=>{
    //console.log(currentUserId)
    const dispatch = useDispatch();
    const mainClass = cx({
        [container]: true,
        [mobileChatView]: floatingChat,
    })

    // chat data mappers
    const chatData = useSelector(state=>state.CHAT);
    const [inputMessage, setinputMessage] = useState("");
    
    // inital chat setup, this code will run only one time
    useEffect(()=>{
        let checkChat = null
        if(caseId){
            getChatMessages(caseId, {limit:1000, offset:0}, dispatch)
            checkChat = setInterval(() => {
                getChatMessages(caseId, {limit:1000, offset:0}, dispatch)
            }, 2000)
            setTimeout(scrollToBottom, 1000)
        }
        return () => {
            if(checkChat){
                clearInterval(checkChat)
            }
        }
    },[caseId])

    // chat mobile/desktop handler
    useEffect(()=>{
        if(floatingChat){
            document.body.style.overflow="hidden";
        }
        return () => {
            document.body.style.overflow="";
        }
    },[floatingChat])

    // chat input handlers
    const sendButtonHandler = () => {
        if(inputMessage && inputMessage.length < 256) {
            sendChatMessage({"message": inputMessage, "case_id": caseId}, (res,err) => {
                if(caseId){
                    getChatMessages(caseId, {limit:10, offset:0}, dispatch)
                }
                setinputMessage("")
            })
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendButtonHandler()
        }
    }

    // this fx tries to maintain the scroll position in chat window
    useEffect(()=>{
        maintainScrollPosition()
    },[chatData.chatMessages])
    const maintainScrollPosition = () => {
        let elem = document.getElementById("chatScrollableWindow")
        if(elem){
            // 100px is assumed to be the heigh of a message
            if (elem.scrollHeight - elem.scrollTop - elem.clientHeight < 100) {
                scrollToBottom()
            }
        }
    }
    const scrollToBottom = () => {
        let elem = document.getElementById("chatScrollableWindow")
        if(elem){
            elem.scrollTop = elem.scrollHeight - elem.clientHeight
        }
    }

    return(
        <div className={mainClass + " " + "chatMainContainer"}>
            <div className="header d-flex align-items-center">
                <div className="profile">
                <img className="img-fluid" src={ASSETS_BASE_URL+"/images/common/Avatar_blue.svg"} alt="user" />
                </div>
                <div className="nameSection">
                    <div className="name">{chatHeaderName}</div>
                    {/* <div className="user">
                        <span className="activeUser"></span>
                        <span className="status">Online</span>
                    </div> */}
                </div>
                <img className="close" src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} alt="close" onClick={toggleChat}/>
            </div>
            <div className={chatWidget({floatingChat})} id="chatScrollableWindow">
                <ChatCard floatingChat={floatingChat} messages={chatData.chatMessages} currentUserId={currentUserId}/>
            </div>
            <div className={msgWidget({floatingChat})}>
                <div className="chatbox">
                    <input type="text" className="" placeholder="Write your message..." value={inputMessage} onKeyDown={handleKeyDown} onChange={(e)=>setinputMessage(e.target.value)}/>
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