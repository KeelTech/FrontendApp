import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@actions';
import { SelectCountry } from '@components/SelectCity';

const ProfileForm = ({ dataParams, widget, fieldType, subIndex=0, isMultiple=false })=>{
    const dispatch = useDispatch();
    const { labels, type, value, showError=false, errorMsg='', name='' } = dataParams;
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

    const showCustomFields = fieldType.includes('city') || fieldType.includes('country') || fieldType.includes('state');
    const showDate = fieldType.includes('date');

    if(fieldType.includes('full_address')){
        return <SelectCountry saveSelectedOption={handleAddressUpdate} dataParams={dataParams}/>
    }

    if(!labels || showCustomFields) return null;

    return(
        <div className="formWrapper">
            
            <label>{labels}<sup>*</sup></label>
            
            {
                !showCustomFields?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <input type={showDate?"date":"text"} autoComplete="new-password" onChange={(e)=>handleChange(e.target.value)} value={value}/>
                </div>
                :null
            }  
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