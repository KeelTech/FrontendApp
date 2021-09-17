import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getCountryList, getStateList, savePlaceInfo } from '@actions';
import CustomSearchSelect from '@components/CustomSearchSelect';

const SelectCity = ({ saveSelectedOption, value="" })=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { placeInfo={} } = taskInfo;
    const { state, country } = placeInfo;
    const [list, setList] = useState([]);
    const [selectedVal, setValue] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(state){
            setLoading(true);
            getCityList({id: state}, dispatch, (resp, err)=>{
                setLoading(false);
                if(resp && resp.message){
                    if(resp.message.length==0){
                        setValue({});
                        handleChange({id: ''});
                    }
                    const filterResp = resp.message.map((val)=>{
                        return {...val, name: val.city_name};
                    })
                    if(value){
                        const selectedVal = filterResp.filter(x=>x.id==value);
                        if(selectedVal.length){
                            setValue(selectedVal[0]);
                            handleChange(selectedVal[0]);
                        }else{
                            setValue({});
                            handleChange({id: ''});
                        }
                    }
                    setList(filterResp);
                }
            })
        }
    },[state]);

    const handleChange = (val)=>{
        if(!state){
            return null;
        }
        savePlaceInfo({city: val && val.id}, dispatch);
        saveSelectedOption(val && val.id);
    }
    const { name:val} = selectedVal;
    if(loading) return null;

    //if(!state) return <p className="errorMsg">Please Select Country & State First</p>
    return(
        <Fragment>
        <CustomSearchSelect options={list} placeholder="Search City" value={val} handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
        </Fragment>   
    )
}

const SelectCountry = ({ saveSelectedOption, placeholder="Search Country", isDesired=false, value='' })=>{
    const dispatch = useDispatch();
    const [list, setList] = useState([])
    const [selectedVal, setValue] = useState({});
    useEffect(()=>{
        getCountryList({isDesired}, dispatch, (resp, err)=>{
            if(resp && resp.message){
                if(value && resp.message.length){
                    const selectedVal = resp.message.filter(x=>x.id==value);
                    if(selectedVal.length){
                        setValue(selectedVal[0]);
                        handleChange(selectedVal[0]);
                    }
                }
                setList(resp.message);
            }
        })

    },[]);

    const handleChange = (val)=>{
        savePlaceInfo({country: val && val.id}, dispatch);
        saveSelectedOption(val && val.id)
    }
    const { name:val} = selectedVal;
    return(
        <Fragment>
            <CustomSearchSelect options={list} placeholder={placeholder} value={val} handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
        </Fragment>
    )
}

const SelectState = ({ saveSelectedOption, value="" })=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { placeInfo={} } = taskInfo;
    const { country } = placeInfo;
    const [list, setList] = useState([])
    const [selectedVal, setValue] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(country){
            setLoading(true);
            getStateList({id: country}, dispatch, (resp, err)=>{
                setLoading(false);
                if(resp && resp.message){
                    if(resp.message.length==0){
                        setValue({});
                        handleChange({id: ''});
                    }
                    const filterResp = resp.message.map((val)=>{
                        return {...val, name: val.state};
                    })
                    if(value){
                        const selectedVal = filterResp.filter(x=>x.id==value);
                        if(selectedVal.length){
                            setValue(selectedVal[0]);
                            handleChange(selectedVal[0]);
                        }else{
                            setValue({});
                            handleChange({id: ''});
                        }
                    }else{
                        setValue({});
                    }
                    setList(filterResp);
                }
            })
        }
    },[country]);

    const handleChange = (val)=>{
        savePlaceInfo({state: val && val.id}, dispatch);
        saveSelectedOption(val && val.id);
    }

    const { name:val=''} = selectedVal;

    if(loading) return null
    //if(!country) return <p className="errorMsg">Please Select Country First</p>

    return(
        <Fragment>
            <CustomSearchSelect options={list} placeholder="Search State" value={val} handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
        </Fragment>
        
    )
}

export  { SelectCity, SelectState, SelectCountry }