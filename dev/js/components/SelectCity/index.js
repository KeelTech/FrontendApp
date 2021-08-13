import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getCountryList, getStateList, savePlaceInfo } from '@actions';
import CustomSearchSelect from '@components/CustomSearchSelect';

let city = [
    {val:'aa'},
    {val:'bb'},
    {val:'cc'}
]
const SelectCity = ({ saveSelectedOption })=>{
    const dispatch = useDispatch();
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { placeInfo={} } = taskInfo;
    const { state, country } = placeInfo;
    const [list, setList] = useState([]);

    useEffect(()=>{
        if(country||state){
            getCityList({id: country||state}, dispatch, (resp, err)=>{
                if(resp && resp.message){
                    const filterResp = resp.message.map((val)=>{
                        return {...val, name: val.city_name};
                    })
                    console.log(filterResp);
                    setList(filterResp);
                }
            })
        }
    },[city, country]);

    const handleChange = (val)=>{
        savePlaceInfo({city: val && val.id}, dispatch);
        saveSelectedOption(val && val.id);
    }

    return(
        <Fragment>
        {
            list.length?
            <CustomSearchSelect options={list} value="" handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
            :<p className="errorMsg">Please Select Country & State First</p>
        }
        </Fragment>   
    )
}

const SelectCountry = ({ saveSelectedOption })=>{
    const dispatch = useDispatch();
    const [list, setList] = useState([])

    useEffect(()=>{
        getCountryList({}, dispatch, (resp, err)=>{
            console.log(resp);
            if(resp && resp.message){
                setList(resp.message);
            }
        })

    },[]);

    const handleChange = (val)=>{
        savePlaceInfo({country: val && val.id}, dispatch);
        saveSelectedOption(val && val.id)
    }

    return(
        <Fragment>
        {
            list.length?
            <CustomSearchSelect options={list} value="" handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
            :null
        }
        </Fragment>
    )
}

const SelectState = ({ saveSelectedOption })=>{
    const dispatch = useDispatch();
    const { placeInfo={} } = taskInfo;
    const { country } = placeInfo;
    const [list, setList] = useState([])

    useEffect(()=>{
        getStateList({id: country}, dispatch, (resp, err)=>{
            if(resp){
                setList([
                    
                ])
            }
        })

    },[state]);

    const handleChange = (val)=>{
        savePlaceInfo({state: val && val.id}, dispatch);
        saveSelectedOption(val && val.id);
    }

    return(
        <Fragment>
            {
                list.length?<CustomSearchSelect options={list} value="" handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>:
                <p className="errorMsg">Please Select Country First</p>
            }
        </Fragment>
        
    )
}

export  { SelectCity, SelectState, SelectCountry }