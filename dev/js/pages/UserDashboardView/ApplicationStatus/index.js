import React, { useState, useEffect } from 'react';

import { getApplicationProgress } from '@actions';

const ApplicationStatus = ()=>{

    const [progressData, setProgressData] = useState([])

    useEffect(()=>{
        getApplicationProgress({}, null, (resp, error)=>{
            console.log(resp);
            if(resp && resp.data){
                setProgressData(resp.data);
            }
        });
    },[])

    return(
        <div className='uploadStatus'>
        <h2>Itineraries</h2>
        <div className='uploadSection'>
            {
                progressData.map((val, key)=>{
                    const {case_checkpoint, status} = val;
                    const {  title, description } = case_checkpoint;
                    let statusCls = '';
                    if(status==1){
                        statusCls = 'pendingApp'
                    }else if(status==3){
                        statusCls = 'successApp';
                    }
                    return <div className={`uploadCardCont ${statusCls}`} key={key}>
                    <h3>{title}</h3>
                    <div className='uloadCardWhite'>
                        <ul>
                            <li>
                                <div className='customCheck_box'>
                                    <div className="checkBoxContainer">
                                        <label className="check_container">
                                            <p>{description}</p>
                                            <input type="checkbox" checked />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                })
            }
        </div>
    </div>
    )
}

export default ApplicationStatus;