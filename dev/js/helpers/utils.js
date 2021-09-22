import React from 'react';
import { css } from '@emotion/css';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getFormattedDate = (date)=>{
    let formattedDate ='';
    let fullYear = '';
    let day='';
    let month = 0;
    if(date){
        try{
            let dateObj = new Date(date);
            month = dateObj.getMonth();
            fullYear = dateObj.getFullYear();
            day = dateObj.getDate();
            formattedDate = `${MONTH[month]} ${day}, ${fullYear}`;
        }catch(e){
            console.log('error in parsing date', e);
            formattedDate ='';
        }
    }
    return { formattedDate, fullYear, day, month, formatMonth: MONTH[month]};
}

export const getFormattedTime = (val)=>{
    let timeString='';
    if(val){
        try{
            const date = new Date(val);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let timeSuffix = 'AM';
            if(hours>=12){
                hours = hours==12?12:hours-12;
                timeSuffix = 'PM';
            }
            if(hours<10){
                hours = `0${hours}`;
            }
            if(minutes<10){
                minutes = `0${minutes}`;
            }
            timeString = `${hours}:${minutes} ${timeSuffix}`;
        }catch(e){
            timeString ='';
        }
    }
    return timeString;
}

export const getNameInitialHelper = (name="")=>{
    let value = name.split(' ');
    let initials='';
    if(value[0][0]){
        initials+=value[0][0].toUpperCase();
    }
    if(value.length>1 && value[1][0]){
        initials+=value[1][0].toUpperCase();
    }
    return initials;
}

export const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const statusStyle = props =>css`
    // background: ${props.bgColor};
    background: ${props.bgColor};;
    border: 1px solid ${props.bgBorder};
    padding: 0px 5px;
    color: ${props.bgBorder};
    width: 100%;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    font-weight: 500;
    font-size: 10px;
    width:100px;
`

export const renderStatusText = (val) =>{
    let status = '';
    let bgColor = 'red';
    let bgBorder = 'white';
    if(val==0){
        status = 'Pending on customer'
        bgColor='#F5D6D6';
        bgBorder="#CF3030";
    }else if(val ==1){
        status = 'Pending on you'
        bgColor='#F5D6D6';
        bgBorder="#CF3030";
    }else if(val==2){
        status = 'Completed'
        bgColor='#DEF2EC';
        bgBorder="#4CBC9A";
    }
    return <span className={statusStyle({ bgColor,bgBorder })}>{status}</span>
}