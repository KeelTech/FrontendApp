import React, { useEffect, useState, Fragment } from 'react';

import { getQuestions, submitQuestions } from '@actions';

import OptionView from './option.js'
import InputView from './input.js';
import CheckboxView from './checkbox.js';
import { container } from './style.js';

const CustomChatWidget = ()=>{

    const [questionList, setQuestions] = useState([]);
    const[showSubmit, setSubmit] = useState(false);
    useEffect(()=>{
        getQuestions({}, {}, (resp)=>{
            if(resp){
                setQuestions(resp);
            }
        })
    },[])

    const setData = (id, value)=>{
        let questionIndex = 0;
        const newQuestions = questionList.map((val, index)=>{
            if(val.id===id){
                questionIndex = index;
                return {...val, ...value}
            }
            return val;
        })
        if(questionIndex===questionList.length-1){
            setSubmit(true);
        }
        setQuestions(newQuestions);
    }

    const clickSubmit = ()=>{
        let dataParams = [];
        questionList.map((val)=>{
            const { dataVal='', id } = val;
            dataParams.push({
                question: id,
                answer: dataVal
            })
        })
        const postParams = {
            answered_questionnaires: dataParams
        }
        console.log('data params is', postParams);
        submitQuestions(postParams, null, (resp, error)=>{
            console.log('resp is', resp);
            console.log('error is ', error)
        })
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
                        //filter(x=>x.answer_type_value==='Checkbox').
                        questionList.map((val, key)=>{
                            const { answer_type, is_submitted } = val;
                            if(!is_submitted && (answer_type===1|| answer_type===2 || answer_type===3)){
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
                                {
                                    (count===1 || is_submitted ) && answer_type===2?
                                    <CheckboxView data={val} setData={setData}/>
                                    :null
                                }
                            </Fragment>
                        })
                    }
                    {
                        showSubmit?<button className="submitCht" onClick={clickSubmit}>Submit</button>:null
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