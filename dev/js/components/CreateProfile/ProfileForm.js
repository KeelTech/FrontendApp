import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@actions';
import { SelectCountry } from '@components/SelectCity';

const ProfileForm = ({ dataParams, widget, fieldType, subIndex=0, isMultiple=false })=>{
    const dispatch = useDispatch();
    const { labels, type, value, showError=false, errorMsg='', name='', choices } = dataParams;
    const handleChange = (val)=>{
        let updatedParams = {
            data: {
                [fieldType]: {...dataParams, value: val, showError: false}
            },
            type: widget
        }
        if(isMultiple){
            updatedParams.subIndex = subIndex;
            updatedParams.isMultiple = true;
        }
        updateUserProfile(updatedParams, dispatch);
    }

    const handleAddressUpdate = (val)=>{
        let updatedParams = {
            data: {
                [fieldType]: {...dataParams, ...val, showError: false}
            },
            type: widget
        }
        if(isMultiple){
            updatedParams.subIndex = subIndex;
            updatedParams.isMultiple = true;
        }
        updateUserProfile(updatedParams, dispatch);
    }

    const handleCheckboxSelection = (val)=>{
        let updatedParams = {
            data: {
                [fieldType]: {...dataParams, value: val, showError: false}
            },
            type: widget
        }
        updateUserProfile(updatedParams, dispatch);
    }

    const handleTypeChange = (e)=>{
        const val = e.target.value;
        let updatedParams = {
            data: {
                [fieldType]: {...dataParams, value: val, showError: false}
            },
            type: widget
        }
        if(isMultiple){
            updatedParams.subIndex = subIndex;
            updatedParams.isMultiple = true;
        }
        updateUserProfile(updatedParams, dispatch);
    }

    const showCustomFields = fieldType.includes('city') || fieldType.includes('country') || fieldType.includes('state');
    const showDate = fieldType.includes('date');

    if(fieldType.includes('full_address')){
        return <SelectCountry saveSelectedOption={handleAddressUpdate} dataParams={dataParams}/>
    }

    if(type==="checkbox"){
        const { lables='', value:selectedCheckboxValue=false } = dataParams;
        return <div className="formWrapper">
            <div className="checkBoxContainer">
                <label className="check_container">
                    <p>{lables||''}</p>
                    <input type="checkbox" checked={selectedCheckboxValue} onClick={()=>handleCheckboxSelection(!selectedCheckboxValue)}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    }

    if(!labels || showCustomFields) return null;
    
    if(type==="drop-down"){
        
        return(
            <div className="formWrapper">
                <label>{labels}<sup>*</sup></label>
                <div className={`selectBox inpCont ${showError?'showError':''}`}>
                    <select placeholder="India" value={value||''} onChange={handleTypeChange}>
                    <option value="">Select the {labels}</option>
                        {
                            choices && choices.map((choiceVal, key)=>{
                                return <option key={key} value={choiceVal[0]||''}>{choiceVal[1]||''}</option>
                            })
                        }
                    </select>
                </div>
                <p className={showError?"errorMsg":"hideMsg"}>{errorMsg?errorMsg:`Please Select ${labels}`}</p>
            </div>
        )
    }

    return(
        <div className="formWrapper">
            
            <label>{labels}<sup>*</sup></label>
            
            <div className={`inpCont ${showError?'showError':''}`}>
                {
                    type==="textarea"?<textarea onChange={(e)=>handleChange(e.target.value)} value={value}></textarea>:<input type={showDate?"date":"text"} autoComplete="new-password" onChange={(e)=>handleChange(e.target.value)} value={value}/>

                }
            </div>  
            <p className={showError?"errorMsg":"hideMsg"}>{errorMsg?errorMsg:`Please Fill ${labels}`}</p>
            {
                type ==='dropdown' && false?
                <div className="formWrapper">
                    <label>Select the Country to Travel<sup>*</sup></label>
                    <div className="selectBox">
                        <select placeholder="India">
                            <option>Name 1</option>
                            <option>Name 2</option>
                            <option>Name 3</option>
                            <option>Name 4</option>
                        </select>
                    </div>
                </div>
                :null
            }
            
        </div>
    )
}

export default ProfileForm;