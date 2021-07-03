import React from 'react';
import { chatBox } from './style.js';

const chat = [
    {
        text: 'Hello John!',
        isReceiver: true,
        time: ''
    },
    {
        text: 'Can you arrange schedule for next meeting?',
        isReceiver: true,
        time: '12:45 PM, 12 Jun 2021'
    },
    {
        text: 'Hello Jordan!',
        isReceiver: false,
        time: ''
    },
    {
        text: 'Okay, I’ll arrange it soon. i noftify you when it’s done',
        isReceiver: false,
        time: '12:45 PM, 12 Jun 2021'
    },
    {
        text: 'Hello John!',
        isReceiver: true,
        time: ''
    },
    {
        text: 'Can you arrange schedule for next meeting?',
        isReceiver: true,
        time: '12:45 PM, 12 Jun 2021'
    },
    {
        text: 'Hello Jordan!',
        isReceiver: false,
        time: ''
    },
    {
        text: 'Okay, I’ll arrange it soon. i noftify you when it’s done',
        isReceiver: false,
        time: '12:45 PM, 12 Jun 2021'
    }
]
const ChatCard = ({ floatingChat =false})=>{

    return(
        <div className={chatBox({floatingChat})}>
            {
                chat.map((val, key)=>{
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