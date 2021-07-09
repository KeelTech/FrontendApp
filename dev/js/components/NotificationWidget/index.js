import React from 'react';
import { container } from './style.js';

const NotificationWidget = ()=>{

    return(
        <div className={container}>
            <img src={ASSETS_BASE_URL+"/images/common/notificationIcon.svg"} alt="notification" onClick={()=>{}}/>
        </div>
    )
}

export default NotificationWidget;