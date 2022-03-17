import React, { Fragment, useRef, useEffect, useState } from 'react';
import CustomToaster from '@components/CustomToaster';
import { validateEmail } from '@helpers/utils.js';

const InputView = ({data, setData, name})=>{
    const { question_text, text_choice='', id, is_submitted=false, dataVal='', key: questionType } = data;
    const focusRef = useRef();
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })

    useEffect(()=>{
        focusRef.current.focus();
        try{
            document.getElementsByClassName('msger-chat')[0].scrollTop= document.getElementsByClassName('msger-chat')[0].scrollHeight;
        }catch(e){
            
        }
    },[])
    
    const saveData = (e)=>{
        const val = e.target.value;
        setData(id, {text_choice: val, dataVal: val})
    }

    const hideToaster = () => {
        setToasterInfo({
            isVisible: false
        })
    }

    const keyDown = (e)=>{
        if(e.key==="Enter" && text_choice){
            if(questionType=='email'){
                if(!validateEmail(text_choice)){
                    setToasterInfo({
                        msg: 'Please enter valid email',
                        isError: true,
                        isVisible: true
                    });

                    setTimeout(()=>{
                        hideToaster();
                    },1500)
                    return;
                }
            }
            setData(id, {is_submitted: true})
        }
    }

    const renderHtmlContent = ()=>{
        if(question_text && question_text.startsWith('<div>')){
            return <div dangerouslySetInnerHTML={{__html: question_text}} />
        }
        return question_text.replaceAll('{name}', name)
    }

    const handleClick = ()=>{
        if(questionType=='email'){
            if(!validateEmail(text_choice)){
                setToasterInfo({
                    msg: 'Please enter valid email',
                    isError: true,
                    isVisible: true
                });

                setTimeout(()=>{
                    hideToaster();
                },1500)
                return;
            }
        }
        setData(id, {is_submitted: true})
    }
    
    return(
        <Fragment>
        <CustomToaster {...toasterInfo} hideToaster={hideToaster} />
        <div className={`msg left-msg`}>
            <div className="msg-img">
            </div>
            <div className="msg-bubble">
                <div className="msg-text">
                    <p>{renderHtmlContent()}</p>
                    {
                        is_submitted?null:
                        <div className="nameInp">
                            <input type="text" ref={focusRef} placeholder="Type here..." value={text_choice} onChange={saveData} onKeyDown={keyDown}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="3650" y="3688" onClick={handleClick}>
                                <path fill="var(--form_inputs_border_color)"
                                    d="M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z">
                                </path>
                            </svg>
                        </div>
                    }
                </div>
            </div>
        </div>
        {
            is_submitted?
            <div className="msg right-msg">
                <div className="msg-img">
                </div>
                <div className="msg-bubble">
                    <div className="msg-text">
                        <p>{dataVal}</p>
                    </div>
                </div>
            </div>
            :null
        }
        </Fragment>
    )
}

export default InputView;
