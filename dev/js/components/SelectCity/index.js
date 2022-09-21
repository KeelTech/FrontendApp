import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, getStateList, savePlaceInfo } from '@actions';
import CustomSearchSelect from '@components/CustomSearchSelect';

const SelectCountry = ({ saveSelectedOption, dataParams={} })=>{
    const { city='', cityId='', cityLabel='', country='', countryId='', countryLabel='', state='', stateId='', stateLabel='', showError=false } = dataParams;

    const [cityList, setCityList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const dispatch = useDispatch();

    const taskInfo = useSelector(state => state.TASK_INFO);
    const { countryList=[] } = taskInfo;

    useEffect(()=>{
        if(countryId){
            getStateList({id: countryId}, dispatch, (resp, err)=>{
                if(resp && resp.message){
                    const filterResp = resp.message.map((val)=>{
                        return {...val, name: val.state};
                    })
                    setStateList(filterResp);
                }
            })
        }
    },[countryId]);

    useEffect(()=>{
        if(stateId){
            getCityList({id: stateId}, dispatch, (resp, err)=>{
                if(resp && resp.message){
                    const filterResp = resp.message.map((val)=>{
                        return {...val, name: val.city_name};
                    })
                    setCityList(filterResp);
                }
            })
        }
    },[stateId]);

    const handleCountryChange = (val)=>{
        const { id, name } = val;
        setCityList([]);
        saveSelectedOption({city:'', cityId:'', country:name, countryId:id, state:'', stateId:''})
    }

    const handleStateChange = (val)=>{
        const { id, name } = val;
        saveSelectedOption({city:'', cityId:'', state:name, stateId:id})
    }

    const handleCityChange = (val)=>{
        const { id, name } = val;
        saveSelectedOption({city:name, cityId:id})
    }
    return(
        <Fragment>
            {
                countryLabel?
                <div className="formWrapper">
                    <label>{countryLabel}<sup>*</sup></label>
                    <CustomSearchSelect options={countryList} placeholder="Search Country" value={country} handleChange={handleCountryChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
                    <p className={showError && !country?"errorMsg":"hideMsg"}>Please Select Country</p>
                </div>
                :null
            }
            {
                stateLabel?
                <div className="formWrapper">
                    <label>{stateLabel}<sup>*</sup></label>
                    <CustomSearchSelect options={stateList} placeholder="Search State" value={state} handleChange={handleStateChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
                    <p className={showError && !state?"errorMsg":"hideMsg"}>Please Select State</p>
                </div>
                :null
            }
            {
                cityLabel?
                <div className="formWrapper">
                    <label>{cityLabel}<sup>*</sup></label>
                    <CustomSearchSelect options={cityList} placeholder="Search City" value={city} handleChange={handleCityChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
                    <p className={showError && !city?"errorMsg":"hideMsg"}>Please Select City</p>
                </div>
                :null
            }
            
        </Fragment>
    )
}

const SelectMainCountry = ({ saveSelectedOption, value="", placeholder="Select Country" })=>{
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { countryList=[] } = taskInfo;

    const handleChange = (val)=>{
        saveSelectedOption(val && val.id, val);
    }

    return(
        <Fragment>
            <CustomSearchSelect options={countryList} placeholder={placeholder} value={value} handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
        </Fragment>
        
    )
}

const SelectMainProfileCountry = ({ saveSelectedOption, value="", placeholder="Select Country", showError })=>{
    const taskInfo = useSelector(state => state.TASK_INFO);
    const [countryInfo, setCountryInfo] = useState('');
    const { countryList=[] } = taskInfo;

    useEffect(()=>{
        const selectedCountry = countryList.filter(x=>x.id===value);
        if(selectedCountry && selectedCountry.length){
            setCountryInfo(selectedCountry[0]);
        }
    },[value])

    const handleChange = (val)=>{
        saveSelectedOption(val && val.id, val);
    }

    return(
        <div className="formWrapper">
            <label>{placeholder}<sup>*</sup></label>
            <CustomSearchSelect options={countryList} placeholder={placeholder} value={countryInfo && countryInfo.name||''} handleChange={handleChange} border="1px solid #CED4DA" minHeight="44px" padding="5px 10px" borderRadius="4px"/>
            <p className={showError?"errorMsg":"hideMsg"}>{`Please Select ${placeholder}`}</p>
        </div>
    )
}

export  { SelectMainCountry, SelectCountry, SelectMainProfileCountry }