import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProfileView = ({ fullProfileInfo={}, editProfileRedirect, userInfo={} })=>{
    const { profile={}} = userInfo;
    const { first_name='', last_name='' } = profile;
    const [activeWidgets, setActiveWidget] = useState([]);

    const handleClick = (val)=>{
        let newVal = [...activeWidgets];
        if(activeWidgets.includes(val)){
            newVal = newVal.filter(x=>x!==val);
        }else{
            newVal.push(val);
        }
        setActiveWidget(newVal);
    }
    const history = useHistory();
    return(
        <div className="useDetailsContainer ">
            <div className="userProfile">
                <div className="userNameDtls">
                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
                    <h3>{`${first_name} ${last_name}`}</h3>
                </div>
                <button className="editPrfl" onClick={editProfileRedirect}>Edit Profile</button>
            </div>
            {/* <div className="editProgress">
                <label>30% complete</label>
                <div className="progressBar">
                    <div className="progBarFill" style={{ width: '30%' }}></div>
                </div>
            </div> */}
            {
                Object.entries(fullProfileInfo).map((val)=>{
                    const [type, values] = val;
                    let widgetName = '';
                    if(type.includes('profile')){
                        widgetName = 'Personal Details';
                    }else if(type.includes('education_assessment')){
                        widgetName = 'Education';
                    }else if(type.includes('qualification')){
                        widgetName = 'Educational Creational Assessment';
                    }else if(type.includes('work_experience')){
                        widgetName = 'Work Experience';
                    }else if(type.includes('relative_in_canada')){
                        widgetName = 'Relative in Canada (if any)';
                    }
                    const isHide = activeWidgets.includes(type);
                    return <div className="prflDtlsAccordionContainer" key={type}>
                            <div className="prfAccrd">
                                <div className="accrdHead">
                                    <h5>{widgetName}</h5>
                                    <button onClick={()=>handleClick(type)}>{isHide?'Show Details':'Hide Details'} <img className={`img-fluid ${isHide?'':'rotateAcordion'}`} src={ASSETS_BASE_URL + "/images/common/drop.svg"}/></button>
                                </div>
                                {
                                    isHide?null:
                                    <div className="accrdContent">
                                        <ul>
                                            {
                                                Array.isArray(values)?
                                                values.map((widgetObject, dataVal)=>{
                                                    return Object.values(widgetObject).map((widgetVal)=>{
                                                        const { labels, value=''} = widgetVal;
                                                        if(!labels) return null;
                                                        return (
                                                            <li key={dataVal+labels}>
                                                                <h5>{labels}:</h5>
                                                                <p>{value}</p>
                                                            </li>
                                                        )
                                                    })
                                                })
                                                :Object.values(values).map((widgetVal, dataKeys)=>{
                                                    const { labels, value=''} = widgetVal;
                                                    if(!labels) return null;
                                                    return (
                                                        <li key={dataKeys}>
                                                            <h5>{labels}:</h5>
                                                            <p>{value}</p>
                                                        </li>
                                                    )
                                                })
                                            }  
                                        </ul>
                                    </div>
                                }
                        </div>
                    </div>
                })
            }
            {/*<div className="prflDtlsAccordionContainer">
                <div className="prfAccrd">
                    <div className="accrdHead">
                        <h5>Personal  Details</h5>
                        <button>Hide Details <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/drop.svg"} /></button>
                    </div>
                    <div className="accrdContent">
                        <ul>
                            <li>
                                <h5>Email:</h5>
                                <p>samantha.williams@gmail.com</p>
                            </li>
                            <li>
                                <h5>Number:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Date of Birth:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Place of Birth:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>City:</h5>
                                <p>lorem Sed ut , unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Country:</h5>
                                <p>lorem  ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Nationality:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>National Identity Number:</h5>
                                <p>lorem Sed ut , unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Date of Issue:</h5>
                                <p>lorem Sed ut perspiciatis,  omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Date of Expiry:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Passport Number:</h5>
                                <p> Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Passport Number:</h5>
                                <p>lorem Sed ut , unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Passport Number:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>
                            <li>
                                <h5>Current Address:</h5>
                                <p>lorem Sed ut perspiciatis, unde omnis iste natus</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default ProfileView;