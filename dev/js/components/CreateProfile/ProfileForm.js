import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@actions';

const ProfileForm = ({ dataParams, widget, fieldType })=>{
    const dispatch = useDispatch();
    const { labels, type, value } = dataParams;
    const handleChange = (val)=>{
        const updatedParams = {
            data: {
                [fieldType]: {...dataParams, value: val}
            },
            type: widget
        }
        updateUserProfile(updatedParams, dispatch);
    }

    return(
        <Fragment>
            {
                type==='char'?
                <div className="formWrapper">
                    <label>{labels}<sup>*</sup></label>
                    <div className="inpCont">
                        <input type="text" placeholder={labels} onChange={(e)=>handleChange(e.target.value)} value={value}/>
                    </div>
                </div>
                :null
            }            
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
        </Fragment>
    )
}

export default ProfileForm;