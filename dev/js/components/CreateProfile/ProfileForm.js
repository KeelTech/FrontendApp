import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@actions';
import { SelectCity, SelectState, SelectCountry } from '@components/SelectCity';

const ProfileForm = ({ dataParams, widget, fieldType, subIndex=0, isMultiple=false })=>{
    const dispatch = useDispatch();
    const { labels, type, value, showError=false } = dataParams;
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

    if(!labels) return null;
    
    const showCustomFields = fieldType=='city' || fieldType=='country' || fieldType=='state';
    const showDate = fieldType.includes('date');

    return(
        <div className="formWrapper">
            <label>{labels}<sup>*</sup></label>
            
            {
                !showCustomFields?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <input type={showDate?"date":"text"} autoComplete="new-password" placeholder={labels} onChange={(e)=>handleChange(e.target.value)} value={value}/>
                </div>
                :null
            }
            {
                fieldType=='city'?
                <SelectCity saveSelectedOption={handleChange}/>
                :null
            }
            {
                fieldType=='country'?
                <SelectCountry saveSelectedOption={handleChange}/>
                :null
            }
            {
                fieldType=='state'?
                <SelectState saveSelectedOption={handleChange}/>
                :null
            }     
            <p className={showError?"errorMsg":"hideMsg"}>Please Fill {labels}</p>   
            {
                type ==='dropdown'?
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