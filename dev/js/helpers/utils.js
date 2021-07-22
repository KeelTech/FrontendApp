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
    try{
        const date = new Date(val);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        timeString = `${hours>12?`${24-hours}:${minutes}PM`:`${hours}:${minutes}AM`}`;
    }catch(e){
        timeString ='';
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