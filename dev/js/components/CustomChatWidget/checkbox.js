import React, { useState, Fragment, useEffect } from 'react';

const CheckboxView = ({ data, setData, name }) => {
    const { id, checkbox_choice = [], question_text = '', dataVal = [] } = data;
    const [currentChoice, setCurrentChoice] = useState(checkbox_choice);

    const handleChange = (val) => {
        const newChoice = currentChoice.map((x) => {
            if (x.id === val.id) {
                if (x.selected) {
                    return { ...x, selected: false }
                } else {
                    return { ...x, selected: true }
                }
            }
            return x;
        })
        setCurrentChoice(newChoice);
    }

    const saveData = () => {
        const dataVal = currentChoice.filter(x => x.selected);
        if (dataVal.length) {
            setData(id, { dataVal, is_submitted: true })
        }
    }

    useEffect(() => {
        try {
            document.getElementsByClassName('msger-chat')[0].scrollTop = document.getElementsByClassName('msger-chat')[0].scrollHeight;
        } catch (e) {

        }
    }, [])

    const renderHtmlContent = ()=>{
        if(question_text && question_text.startsWith('<div>')){
            return <div dangerouslySetInnerHTML={{__html: question_text}} />
        }
        return question_text.replaceAll('{name}', name)
    }

    return (
        <Fragment>
            <div className={`msg left-msg`}>
                <div className="msg-img" >
                </div>
                <div className="msg-bubble">
                    <div className="msg-text">
                        <p>{renderHtmlContent()}</p>
                        {
                            dataVal && dataVal.length ?
                                // <Fragment>
                                //     {
                                //         dataVal.map((val, key) => {
                                //             return <p key={key}>{val.checkbox_text}</p>
                                //         })
                                //     }
                                // </Fragment>
                                null :
                                <Fragment>
                                    {
                                        currentChoice.map((val, key) => {
                                            const { checkbox_text, selected = false } = val;
                                            return <div className="nameInp" key={key}>
                                                <label className="containerInput"><p>{checkbox_text}</p>
                                                    <input type="checkbox" checked={selected} onChange={() => handleChange(val)} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        })
                                    }
                                    <button className="submitCht" onClick={saveData}>Submit</button>
                                </Fragment>
                        }
                    </div>
                </div>
            </div>
            {dataVal && dataVal.length ?
                <div className='msg right-msg'>
                    <div className="msg-img" >
                    </div>
                    <div className="chooseOpt selectedBtnQus">
                        {
                            dataVal.map((val, key) => {
                                return <button key={key}>{val.checkbox_text}</button>
                            })
                        }
                    </div>
                </div>
                : null
            }

        </Fragment>
    )
}

export default CheckboxView
