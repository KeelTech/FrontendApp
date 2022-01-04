import React, { Fragment, useRef, useEffect } from 'react';

const InputView = ({data, setData, name})=>{
    const { question_text, text_choice='', id, is_submitted=false, dataVal='' } = data;
    const focusRef = useRef();

    useEffect(()=>{
        focusRef.current.focus();
        try{
            document.getElementsByClassName('msger-chat')[0].scrollTop= document.getElementsByClassName('msger-chat')[0].scrollHeight;
        }catch(e){
            
        }
    },[])
    
    const saveData = (e)=>{
        console.log('code is',e.key);
        if(e.key==="Enter" && text_choice){
            setData(id, {is_submitted: true})
        }else{
            setData(id, {text_choice: e.target.value, dataVal: e.target.value})
        }
    }
    console.log({name});
    return(
        <Fragment>
        <div className={`msg left-msg`}>
            <div className="msg-img">
            </div>
            <div className="msg-bubble">
                <div className="msg-text">
                    <p>{question_text.replaceAll('{name}', name)}</p>
                    {
                        is_submitted?null:
                        <div className="nameInp">
                            <input type="text" ref={focusRef} placeholder="Type here..." value={text_choice} onChange={saveData} onKeyDown={saveData}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="3650" y="3688" onClick={()=>setData(id, {is_submitted: true})}>
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
