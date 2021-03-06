import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const ProfileView = ({ fullProfileInfo = {}, userInfo = {} }) => {
    const { profile = {} } = userInfo;
    const { first_name = '', last_name = '' } = profile;
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

    const history = useHistory();
    return (
        <div className="useDetailsContainer ">
            <div className="userProfile">
                <div className="userNameDtls">
                    <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
                    <h3>{`${first_name} ${last_name}`}</h3>
                </div>
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
                    let widgetName = '';
                    let selectedType = 0;
                    if (type.includes('profile')) {
                        widgetName = 'Personal Details';
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
                    }
                    const isHide = activeWidgets.includes(type);
                    return <div className="prflDtlsAccordionContainer" key={type}>
                        <div className="prfAccrd">

                            <div className="accrdHead">
                                <h5>{widgetName}</h5>
                                <div className="alignEnd">
                                    {
                                        selectedType ?
                                            <button className="editPrfl" onClick={() => history.push(`/edit/${selectedType}`)}>Edit Profile</button>
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
                                                                Object.values(widgetObject).map((widgetVal) => {
                                                                    const { labels, value = '', name='' } = widgetVal;
                                                                    if (!labels) return null;
                                                                    return (
                                                                        <li key={dataVal + labels}>
                                                                            <h5>{labels}:</h5>
                                                                            <p>{name||value}</p>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                            {
                                                                dataVal==values.length-1?null:<hr></hr>
                                                            }
                                                        </Fragment>
                                                    })
                                                    : Object.values(values).map((widgetVal, dataKeys) => {
                                                        const { labels, value = '', name='' } = widgetVal;
                                                        if (!labels) return null;
                                                        return (
                                                            <li key={dataKeys}>
                                                                <h5>{labels}:</h5>
                                                                <p>{name||value}</p>
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