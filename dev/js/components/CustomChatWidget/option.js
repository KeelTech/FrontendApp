import React, { Fragment, useEffect } from 'react';

const OptionView = ({ data, setData, name }) => {
    const { id, question_text, dropdown_choice, is_submitted = false, dataVal = [] } = data;

    useEffect(() => {
        try {
            document.getElementsByClassName('msger-chat')[0].scrollTop = document.getElementsByClassName('msger-chat')[0].scrollHeight;
        } catch (e) {

        }
    }, [])

    return (
        <Fragment>
            <div className='msg left-msg'>
                <div className="msg-img" >
                </div>
                <div className="chooseOpt">
                    <h5>{question_text.replaceAll('{name}', name)}</h5>
                    <div className="gridbtns">
                        {
                            !is_submitted && dropdown_choice.map((val, key) => {
                                const { dropdown_text } = val;
                                return <button key={key} onClick={() => setData(id, { dataVal: [val], is_submitted: true })}>{dropdown_text}</button>
                            })
                        }
                    </div>
                </div>
            </div>
            {
                is_submitted ?
                    <div className='msg right-msg'>
                        <div className="msg-img" >
                        </div>
                        <div className="chooseOpt selectedBtnQus">
                            {
                                dataVal && dataVal.map((val, key) => {
                                    return <button key={key}>{val.dropdown_text}</button>
                                })
                            }
                        </div>
                    </div>
                    : null
            }
        </Fragment>

    )
}

export default OptionView