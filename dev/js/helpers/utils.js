const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getFormattedDate = (date)=>{
    let formattedDate ='';
    if(date){
        try{
            let dateObj = new Date(date);
            let month = dateObj.getMonth();
            let fullYear = dateObj.getFullYear();
            let day = dateObj.getDate();
            formattedDate = `${MONTH[month]} ${day}, ${fullYear}`;
        }catch(e){
            formattedDate ='';
        }
    }
    return formattedDate;
}