import React, { useEffect, useState, Fragment, useMemo } from 'react';

import { getQuestions, submitQuestions } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
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
    const [showLoader, setLoader] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [questionList, setQuestions] = useState([]);
    const[showSubmit, setSubmit] = useState(false);
    const [spouseQuestions, setSpouseQuestions] = useState([]);
    const [selectedQuestionList, setSelectedQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        getQuestions({}, {}, (resp)=>{
            if(resp && resp.questions){
                setQuestions(resp.questions);
                const firstQuestion = resp.questions.filter(x=>x.index==0);
                setSelectedQuestion(firstQuestion);
                setSpouseQuestions(resp.spouse_questions||[]);
            }
        })
    },[])

    const setData = (id, value)=>{
        let questionIndex = 0;
        let isSpouse = false;
        let spouseIndex = 0;
        const newQuestions = selectedQuestionList.map((val, index)=>{
            if(val.id===id){
                // if(val.key=="spouse_exist" && value && value.dataVal && Array.isArray(value.dataVal)){
                //     value.dataVal.map((spouseData)=>{
                //         if(spouseData.dropdown_text=="Yes"){
                //             isSpouse = true;   
                //         }
                //     })
                //     spouseIndex = index;
                // }
                questionIndex = index;
                return {...val, ...value}
            }
            return val;
        })
        if(value.is_submitted){
            let isDependentQuestion;
            if(value.dataVal && Array.isArray(value.dataVal) && value.dataVal.length){
                isDependentQuestion = value.dataVal[0].dependent_question;
            }else{
                isDependentQuestion = value.dependent_question;
            }
            let newQuestionAdded = [];
            if(isDependentQuestion){
                newQuestionAdded = questionList.filter(x=>x.id==isDependentQuestion);
            }else{
                const newIndex = currentIndex+1;
                newQuestionAdded = questionList.filter(x=>x.index == newIndex);
                setCurrentIndex(newIndex);
            }
            if(newQuestionAdded.length){
                const newSelectedQuestions = newQuestions.concat(newQuestionAdded)
                setSelectedQuestion(newSelectedQuestions);
            }else{
                setSubmit(true);
            }
        }else{
            setSelectedQuestion(newQuestions);
        }
        //setQuestions(newQuestions);
    }

    const clickSubmit = ()=>{
        const postParams = {}
        setLoader(true);
        selectedQuestionList.map((val)=>{
            const { dataVal='', id, key='', answer_type_value } = val;
            // if(key=="spouse_exist"){
            //     let answer = false;
            //     if(Array.isArray(dataVal) && dataVal.length){
            //         answer = dataVal[0].dropdown_text=="No"?false:true
            //     }
            //     postParams[key] = answer;
            // }else
            
            if(Array.isArray(dataVal)){
                let answer_id='';
                let multipleSelectedIds=''
                try{
                    multipleSelectedIds = dataVal.map(x=>x.id).join(',');
                }catch(e){
                    multipleSelectedIds=''
                }
                if(answer_type_value=="Checkbox"){
                    answer_id = multipleSelectedIds;
                }else{
                    answer_id = dataVal && dataVal[0] && dataVal[0].id;
                }
                postParams[key] = {
                    question_id: id,
                    answer_id
                }
            }else{
                postParams[key] = dataVal;
            }
        })
        submitQuestions(postParams, null, (resp, error)=>{
            setLoader(false);
            try{

                if(resp.status==1){
                    setSuccess(true);
                }else{
                    alert('failed to submit');
                }
            }catch(e){
                alert('failed to submit');
            }
        })
    }

    let count = 0;

    const name = useMemo(()=>{
        if(questionList && questionList.length){
            const nameField = questionList.filter(x=>x.key=='name')
            if(nameField && nameField.length){
                return nameField[0].dataVal||''
            }
        }
        return ''
    },[questionList])
    return(
        <div className={container}>
            {
                showLoader && <LoadingWidget/>
            }
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
                        selectedQuestionList.map((val, key)=>{
                            const { answer_type, is_submitted } = val;
                            // if(!is_submitted && (answer_type===1|| answer_type===2 || answer_type===3)){
                            //     count++;
                            // }
                            return <Fragment key={key}>

                                {
                                    answer_type===1?
                                    <InputView data={val} setData={setData} name={name}/>
                                    :null
                                }
                                {
                                    answer_type===3?
                                    <OptionView data={val} setData={setData} name={name}/>
                                    :null
                                }
                                {
                                    answer_type===2?
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