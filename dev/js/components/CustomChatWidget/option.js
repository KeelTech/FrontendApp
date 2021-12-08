import React, { Fragment } from 'react';

const OptionView = ({data, setData})=>{
    const { id, question_text, checkbox_choice, dropdown_choice, is_submitted=false } = data;
    return(
        <Fragment>
            <div className="chooseOpt">
                <h5>{question_text}</h5>
                <div className="gridbtns">
                    {
                        !is_submitted && dropdown_choice.map((val, key)=>{
                        const { dropdown_text } = val;
                        return <button key={key} onClick={()=>setData(id, {checkbox_choice: [val], is_submitted: true})}>{dropdown_text}</button>
                        })
                    }
                </div>
            </div>
            {
                is_submitted?
                <div className="chooseOpt">
                    {
                        checkbox_choice.map((val, key)=>{
                            return <button key={key}>{val.dropdown_text}</button>
                        })
                    }
                </div>
                :null
            }
        </Fragment>
        
    )
}

export default OptionView