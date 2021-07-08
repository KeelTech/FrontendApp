import React, { useState } from 'react';
import { container, menuBar } from './style.js';

const AttachmentCard = ()=>{
    const [showMenuBar, setMenuBar] = useState(false);

    return(
        <div className={container}>
            <img className="docIcon" src={ASSETS_BASE_URL+"/images/common/document.svg"} alt="document"/>
            <span className="docx">Aadhar Card</span>
            <img className="dotMenu" src={ASSETS_BASE_URL+"/images/common/dotMenu.svg"} alt="menu" onClick={()=>setMenuBar(val=>!val)}/>
            {
                showMenuBar && <div className={menuBar}>
                    <span>Download</span>
                    <span>Delete</span>
                </div>
            }
        </div>
    )
}


export default AttachmentCard;