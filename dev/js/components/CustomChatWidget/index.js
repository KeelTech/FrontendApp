import React, { useEffect, useState, Fragment } from 'react';

import { getQuestions } from '@actions';

import MessageView from './message.js';
import OptionView from './option.js'
import InputView from './input.js';
import InfoView from './info.js';
import { container } from './style.js';

const CustomChatWidget = ()=>{

    const [questionList, setQuestions] = useState([]);

    useEffect(()=>{
        getQuestions({}, {}, (resp)=>{
            if(resp){
                setQuestions(resp);
            }
        })
    },[])

    const setData = (id, value)=>{
        const newQuestions = questionList.map((val)=>{
            if(val.id===id){
                return {...val, ...value}
            }
            return val;
        })
        setQuestions(newQuestions);
    }

    let count = 0;

    return(
        <div className={container}>
            <section className="msger">
                <header className="msger-header">
                    <div className="msger-header-title">
                        <i className="fas fa-comment-alt"></i> Start Chat
                    </div>
                    <div className="msger-header-options">
                        <span><i className="fas fa-cog"></i></span>
                    </div>
                </header>
                <main className="msger-chat">
                    {
                        questionList.map((val, key)=>{
                            const { answer_type, is_submitted } = val;
                            if(!is_submitted && (answer_type===1|| answer_type===3)){
                                count++;
                            }
                            return <Fragment key={key}>

                                {
                                    (count===1 || is_submitted) && answer_type===1?
                                    <InputView data={val} setData={setData}/>
                                    :null
                                }
                                {
                                    (count===1 || is_submitted) && answer_type===3?
                                    <OptionView data={val} setData={setData}/>
                                    :null
                                }
                            </Fragment>
                        })
                    }
                    {/* <MessageView data={{left:false}}/>
                    <InfoView left/>
                    <InfoView/> */}
                </main>
            </section>
        </div>
        
    )
}

export default CustomChatWidget;