import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';
import { SelectCity, SelectState, SelectCountry } from '@components/SelectCity';
import { container, progressBar } from './style.js';

const CreateProfile = ()=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { fullProfileInfo } = taskInfo;
    const [dataParams, setDataParams] = useState({
        first_name: {
            value: '',
            labels: "First Name",
            type: "char"
        },
        last_name: {
            value: '',
            labels: "Last Name",
            type: "char"
        },
        mother_fullname: {
            value: '',
            labels: "Mother's Fullname",
            type: "char"
        },
        father_fullname: {
            value: '',
            labels: "Father's Fullname",
            type: "char"
        },
        age: {
            value: '',
            labels: "Age",
            type: "char"
        },
        address: {
            value: '',
            labels: "Address",
            type: "address"
        },
        date_of_birth: {
            value: '',
            labels: "Date of Birth",
            type: "char"
        }
    });

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [loading, setLoading] = useState('');

    const handleCreateForm = ()=>{
        const postParams={};
        let isError = false;
        let newDataParams = {};
        Object.entries(dataParams).map((val, key)=>{
            const [fieldType, dataValues] = val;
            const { value } = dataValues;
            postParams[fieldType] = value;
            let showError = false;
            if(!value){
                isError = true;
                showError = true;
            }
            newDataParams[fieldType]= {...dataValues, showError }
        })
        if(isError){
            setDataParams(newDataParams);
            return;
        };
        setLoading(true);
        createProfile(postParams, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp){
                setToasterInfo({
                    isVisible: true,
                    isError: false,
                    isSuccess: true,
                    msg: 'Profile Created Successfully'
                });
            }else{
                setToasterInfo({
                    isVisible: true,
                    isError: true,
                    isSuccess: false,
                    msg: 'Failed Please try again later'
                });
            }
            setTimeout(() => {
                hideToaster();
            }, 1000);
        });
    }

    const handleChange = (val)=>{
        setDataParams((oldState)=>{
            return {...oldState, ...val}
        })
    }

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }
    return(
        <div className={container}>
            {
                loading?<div className={loaderView}><LoadingWidget/></div>:null
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <div className={progressBar}>
            <div className="desktopProgressBar">
                <div className="userFormsMainContainer">
                    <div className="formsScroll">
                        {
                            Object.entries(dataParams).map((val, key)=>{
                                const [fieldType, dataValues] = val;
                                return <ProfileForm fieldType={fieldType} dataParams={dataValues} key={key} handleChange={handleChange}/>
                            })
                        }
                    </div>
                    <div className="btnCont">
                        <button onClick={handleCreateForm}>Create</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

const ProfileForm = ({ dataParams, fieldType, handleChange})=>{
    const { labels, type, value, showError=false } = dataParams;

    const handleFieldChange = (val)=>{
        let updatedParams = {
            [fieldType]: {...dataParams, value: val, showError: false}
        }
        handleChange(updatedParams);
    }

    if(!labels) return null;
    const showCustomFields = fieldType=='city' || fieldType=='country' || fieldType=='state';
    return(
        <div className="formWrapper">
            <label>{labels}<sup>*</sup></label>
            {
                type==='char' && !showCustomFields?                    
                <div className={`inpCont ${showError?'showError':''}`}>
                    {
                        fieldType.includes('date')?
                        <input type="date" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                        :<input type="text" autoComplete="new-password" placeholder={labels} onChange={(e)=>handleFieldChange(e.target.value)} value={value}/>
                    }
                </div>
                :null
            }
            {
                type=='address'?
                <div className={`inpCont ${showError?'showError':''}`}>
                    <textarea onChange={(e)=>handleFieldChange(e.target.value)} value={value} placeholder={labels} autoComplete="new-password"></textarea>
                </div>
                :null
            }
            <p className={showError?"errorMsg":"hideMsg"}>Please Fill {labels}</p>
            {/* {
                fieldType=='city'?
                <SelectCity saveSelectedOption={handleFieldChange}/>
                :null
            }
            {
                fieldType=='country'?
                <SelectCountry saveSelectedOption={handleFieldChange}/>
                :null
            }
            {
                fieldType=='state'?
                <SelectState saveSelectedOption={handleFieldChange}/>
                :null
            } */}
        </div>
    )
}

export default CreateProfile;