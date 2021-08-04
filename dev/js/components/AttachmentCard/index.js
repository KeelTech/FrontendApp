import React, { useState } from 'react';
import DocumentModal from '@components/DocumentModal';
import { container, menuBar } from './style.js';

const AttachmentCard = ({ data, deleteDocumentClicked, downloadDocumentClicked=()=>{} })=>{
    const [showMenuBar, setMenuBar] = useState(false);
    const { doc_type, id, doc } = data;

    const toggleMenuBar = ()=>{
        setMenuBar(val=>!val)
    }

    return(
        <div className={container} key={id}>
            <img className="docIcon" src={ASSETS_BASE_URL+"/images/common/document.svg"} alt="document"/>
            <span className="docx">{doc_type}</span>
            <img className="dotMenu" src={ASSETS_BASE_URL+"/images/common/dotMenu.svg"} alt="menu" onClick={toggleMenuBar}/>
            {
                showMenuBar?<DocumentModal id={id} docId={doc} toggle={toggleMenuBar} downloadDocumentClicked={downloadDocumentClicked} deleteDocumentClicked={deleteDocumentClicked}/>:null
            }
        </div>
    )
}


export default AttachmentCard;