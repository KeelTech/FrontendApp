import React, { useState, Fragment, useEffect } from 'react';

const CheckboxView = ({ data, setData }) => {
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

    return (
        <div className={`msg left-msg`}>
            <div className="msg-img" >
            </div>
            <div className="msg-bubble">
                <div className="msg-text">
                    <p>{question_text}</p>
                    {
                        dataVal && dataVal.length ?
                            <Fragment>
                                {
                                    dataVal.map((val, key) => {
                                        return <p key={key}>{val.checkbox_text}</p>
                                    })
                                }
                            </Fragment>
                            :
                            <Fragment>
                                {
                                    currentChoice.map((val, key) => {
                                        const { checkbox_text, selected = false } = val;
                                        return <div className="nameInp" key={key}>
                                            <label className="containerInput"><p>{checkbox_text}</p>
                                                <input type="checkbox" checked={selected} onChange={() => handleChange(val)}/>
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
    )
}

export default CheckboxView
