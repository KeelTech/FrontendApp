import React from 'react';
import CustomInputField from '@components/CustomInputField';
import CustomButton from '@components/CustomButton';
import { formView } from './style.js';

const PersonalDetail = ()=>{

    const changeHandler = ()=>{
        
    }

    return(
        <div className={formView}>
            <div className="formView">
                <div className="formHeading">Personal Details</div>
                <div className="formFields">
                    <CustomInputField changeHandler={changeHandler} type="email" value="email" label="Email:" placeholder="Enter your Email"/>
                    <CustomInputField changeHandler={changeHandler} type="Number" value="Number" label="Number:" placeholder="Enter your Number"/>
                    <CustomInputField changeHandler={changeHandler} type="dob" value="Number" label="Date of Birth:" placeholder="Enter your Number" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="place" value="Number" label="Place of Birth:" placeholder="Enter Place of Birth"/>
                    <CustomInputField changeHandler={changeHandler} type="city" value="Number" label="City:" placeholder="Enter your City"/>
                    <CustomInputField changeHandler={changeHandler} type="doi" value="Number" label="Enter Date of Issue:" placeholder="Enter your Number" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="doe" value="Number" label="Date of Expiry:" placeholder="Enter your Number" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="passport" value="Number" label="Passport Number:" placeholder="Enter your Passport Number"/>
                    <CustomInputField changeHandler={changeHandler} type="issueDate" value="Number" label="Issue Date:" placeholder="Enter your Number" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="expiryDate" value="Number" label="Expiry Date:" placeholder="Enter your Number" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="passportIssueDate" value="Number" label="Passport Issue Date:" placeholder="Enter Pass" isDate/>
                    <CustomInputField changeHandler={changeHandler} type="currentAddress" value="Number" label="Current Address:" placeholder="Enter Current Address"/>
                </div>
                <div className="cta">
                    <div>
                        <CustomButton text="Cancel" clickHandler={()=>{}} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4"/>
                    </div>
                    <div>
                        <CustomButton text="Save" clickHandler={()=>{}} margin="0px 8px 0px 0px" padding="9px" borderRadius="5px" backgroundColor="#747BB4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail;