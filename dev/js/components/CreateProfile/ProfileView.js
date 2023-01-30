import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const ProfileView = ({ fullProfileInfo = {}, activeTabType, handleTabClick, userInfo}) => {
    const { spouse_profile={} } = fullProfileInfo||{};
    const { profile } = userInfo ||{};
    const { first_name='', last_name=''} = profile ||{};
    
    const [activeWidgets, setActiveWidget] = useState(() => {
        const widgets = [];
        Object.entries(fullProfileInfo).filter((val) => {

            const [type] = val;
            if (type.includes('profile')) return false;
            else {
                widgets.push(type);
            }
        })
        return widgets;
    });

    const handleClick = (val) => {
        let newVal = [...activeWidgets];
        if (activeWidgets.includes(val)) {
            newVal = newVal.filter(x => x !== val);
        } else {
            newVal.push(val);
        }
        setActiveWidget(newVal);
    }

    const renderValue = (valueField, fieldTypeValue)=>{
        let value = valueField;
        if(fieldTypeValue==="checkbox"){
            if(valueField){
                value = "Yes"
            }else{
                value = "No"
            }
        }
        return <p>{value}</p>
    }

    const renderLabelValue = (dataKeys, labelField, valueField, fieldTypeValue)=>{
        return (
            <li key={dataKeys}>
                <h5>{labelField}:</h5>
                {renderValue(valueField, fieldTypeValue)}
                
            </li>
        )

    }

    const renderListView = (val, dataKeys)=>{
        const [fieldType, widgetVal] = val;
        const { labels, value = '', name='', choices, type } = widgetVal;
        let fieldValue = name||value;
        if (!labels) return null;

        if(fieldType=="marital_status" && value==2 && false){
            return <Fragment>
                <li key={dataKeys}>
                    <h5>{labels}:</h5>
                    <p>{name||value}</p>
                </li>
                {
                    Object.entries(spouse_profile).map((val1, key1)=>{
                        return renderListView(val1, key1);
                    })
                }
            </Fragment>
        }else if(choices && choices.length && value){
            const selectedVal = choices.find(val=>val[0]==value);
            fieldValue = selectedVal && selectedVal[1]||'';
        }
        return renderLabelValue(dataKeys, labels, fieldValue, type);
    }
    const history = useHistory();

    return (
        <div className="useDetailsContainer ">
            <div className="userProfile">
                <div className="userNameDtls">
                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
                    <h3>{`${first_name} ${last_name}`}</h3>
                </div>
            </div>
            <div className='newCustomTabCont'>
                <ul>
                    <li onClick={()=>handleTabClick("self")}><button className={activeTabType==="self"?'tabActiv':""}>self</button></li>
                    <li onClick={()=>handleTabClick("spouse")}><button className={activeTabType==="spouse"?'tabActiv':""}>Spouse</button></li>
                </ul>
            </div>
            {/* <div className="editProgress">
                <label>30% complete</label>
                <div className="progressBar">
                    <div className="progBarFill" style={{ width: '30%' }}></div>
                </div>
            </div> */}
            {
                Object.entries(fullProfileInfo).map((val) => {
                    const [type, values] = val;
                    let isSpouseExist = false;
                    let widgetName = '';
                    let selectedType = 0;
                    if (type == 'profile') {
                        widgetName = 'Personal Details (as on Passport)';
                        selectedType = 1;
                    } else if (type.includes('education_assessment')) {
                        widgetName = 'Educational Credential Assessment';
                        selectedType = 2;
                    } else if (type.includes('qualification')) {
                        widgetName = 'Educational';
                        selectedType = 3;
                    } else if (type.includes('work_experience')) {
                        widgetName = 'Work Experience';
                        selectedType = 4;
                    } else if (type.includes('relative_in_canada')) {
                        widgetName = 'Relative in Canada (if any)';
                        selectedType = 5;
                    } else if (type.includes('language_scores')) {
                        widgetName = 'Language Test scores';
                        selectedType = 6;
                    } else if (type.includes('family_information')) {
                        widgetName = 'Customer Family Information';
                        selectedType = 7;
                    }else {
                        return null;
                    }
                    const isHide = activeWidgets.includes(type);
                    return <div className="prflDtlsAccordionContainer" key={type}>
                        <div className="prfAccrd">

                            <div className="accrdHead">
                                <h5>{widgetName}</h5>
                                <div className="alignEnd">
                                    {
                                        selectedType ?
                                            <button className="editPrfl" onClick={() => history.push(`/edit/${activeTabType}/${selectedType}`)}>Edit Profile</button>
                                            : null
                                    }
                                    <button onClick={() => handleClick(type)}>{isHide ? 'Show Details' : 'Hide Details'} <img className={`img-fluid ${isHide ? '' : 'rotateAcordion'}`} src={ASSETS_BASE_URL + "/images/common/drop.svg"} /></button>
                                </div>
                            </div>
                            {
                                isHide ? null :
                                    <div className="accrdContent">
                                        <ul>
                                            {
                                                Array.isArray(values) ?
                                                    values.map((widgetObject, dataVal) => {
                                                        return <Fragment key={dataVal}>
                                                            {
                                                                Object.entries(widgetObject).map((val) => {
                                                                    const [fieldType, widgetVal] = val;
                                                                   // console.log("val is", val);
                                                                    const { labels, value = '', name='', choices, type: fieldTypeValue } = widgetVal;
                                                                    if (!labels && fieldType!=="full_address") return null;
                                                                    let fieldValue = name||value;

                                                                    if(fieldType=="full_address"){
                                                                        const { countryLabel, countryId, stateLabel, stateId, state, country, cityId, cityLabel, city} = widgetVal;
                                                                        return (
                                                                            <Fragment>
                                                                                {renderLabelValue(dataVal + countryLabel, countryLabel, country)}
                                                                                {renderLabelValue(dataVal + stateLabel, stateLabel, state)}
                                                                                {renderLabelValue(dataVal + cityLabel, cityLabel, city)}
                                                                            </Fragment>
                                                                        )
                                                                    }else if(choices && choices.length && value){
                                                                        const selectedVal = choices.find(val=>val[0]==value);
                                                                        fieldValue = selectedVal && selectedVal[1]||'';
                                                                    }
                                                                    return renderLabelValue(dataVal + labels, labels, fieldValue, fieldTypeValue);
                                                                })
                                                            }
                                                            {
                                                                dataVal==values.length-1?null:<hr></hr>
                                                            }
                                                        </Fragment>
                                                    })
                                                    : Object.entries(values).map((val, dataKeys) => {
                                                        const [fieldType, widgetVal] = val;
                                                        const { value = '' } = widgetVal;
                                                        if(!isSpouseExist){
                                                            isSpouseExist = fieldType=="marital_status" && value==2;
                                                        }
                                                        return renderListView(val, dataKeys);
                                                        
                                                    })
                                            }
                                            {
                                                isSpouseExist?
                                                <Fragment>
                                                    <div className="accrdHead">
                                                        <h5 className="spouseName">Spouse Details</h5>
                                                    </div>
                                                    {
                                                        Object.entries(spouse_profile).map((val1, key1)=>{
                                                            return renderListView(val1, key1);
                                                        })
                                                    }
                                                </Fragment>
                                                :null
                                            }
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProfileView;