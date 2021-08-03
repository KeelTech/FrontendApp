import React, { useState } from 'react';
import DocumentModal from '@components/DocumentModal';
import { getFormattedTime, getFormattedDate } from '@helpers/utils.js';
import { container } from './style.js';

const DocumentCard = ({ documentData, downloadDocumentClicked, deleteDocumentClicked })=>{
    const [showMenuBar, setMenuBar] = useState(false);

    const { doc_type, created_at, id, doc_id } = documentData;

    const { formattedDate } = getFormattedDate(created_at);

    const toggleMenuBar = ()=>{
        setMenuBar(val=>!val)
    }
    return(
        <div className={container}>
            <div className="topRow">
                <div className="details">
                    <span className="name">{doc_type}</span>
                    <span className="docDate">{formattedDate} {getFormattedTime(created_at)}</span>
                </div>
                
                <img className="dotMenu" src={ASSETS_BASE_URL+"/images/common/dotMenu.svg"} alt="menu" onClick={toggleMenuBar}/>
            </div>
            <div className="docOverlay"></div>
            {
                showMenuBar?<DocumentModal id={id} docId={doc_id} toggle={toggleMenuBar} downloadDocumentClicked={downloadDocumentClicked} deleteDocumentClicked={deleteDocumentClicked}/>:null
            }
        </div>
    )
}

export default DocumentCard;