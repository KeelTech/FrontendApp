import React, { useEffect, useState, Fragment, useMemo } from 'react';

import { getQuestions, submitQuestions } from '@actions';

import OptionView from './option.js'
import InputView from './input.js';
import CheckboxView from './checkbox.js';
import SuccessModal from './success.js';
import { container } from './style.js';

const SubmitCta = ({clickSubmit})=>{

    useEffect(()=>{
        try{
            document.getElementsByClassName('msger-chat')[0].scrollTop= document.getElementsByClassName('msger-chat')[0].scrollHeight;
        }catch(e){
            
        }
    },[])

    return(
        <button className="submitCht finalSubmit" onClick={clickSubmit}>Submit</button>
    )
}

const CustomChatWidget = ()=>{
    const [showSuccess, setSuccess] = useState(false);
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
        if(questionIndex===questionList.length-1 && value.is_submitted){
            setSubmit(true);
        }
        setQuestions(newQuestions);
    }

    const clickSubmit = ()=>{
        setSuccess(true);
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

    const name = useMemo(()=>{
        if(questionList && questionList.length) return questionList[0].dataVal||''
        return ''
    },[questionList])
    return(
        <div className={container}>
            {showSuccess?<SuccessModal/>:null}
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
                                    <InputView data={val} setData={setData} name={name}/>
                                    :null
                                }
                                {
                                    (count===1 || is_submitted) && answer_type===3?
                                    <OptionView data={val} setData={setData} name={name}/>
                                    :null
                                }
                                {
                                    (count===1 || is_submitted ) && answer_type===2?
                                    <CheckboxView data={val} setData={setData} name={name}/>
                                    :null
                                }
                            </Fragment>
                        })
                    }
                    {
                        showSubmit?<SubmitCta clickSubmit={clickSubmit}/>:null
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