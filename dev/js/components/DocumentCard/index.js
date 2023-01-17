import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DocumentModal from '@components/DocumentModal';
import { getFormattedTime, getFormattedDate } from '@helpers/utils.js';
import { container } from './style.js';

const DocumentCard = ({ documentData, downloadDocumentClicked, deleteDocumentClicked })=>{
    const logginInfo = useSelector(state => state.LOGIN);
    const { isAgent } = logginInfo||{};

    const [showMenuBar, setMenuBar] = useState(false);

    const { doc_type, created_at, id, doc_id, orignal_file_name, user_type='' } = documentData;

    const { formattedDate } = getFormattedDate(created_at);

    const toggleMenuBar = ()=>{
        setMenuBar(val=>!val)
    }
    let uploadedBy = '';
    if(isAgent){
        if(user_type=='CUSTOMER'){
            uploadedBy = 'Customer'
        }else{
            uploadedBy = 'You'
        }
    }else{
        if(user_type=='CUSTOMER'){
            uploadedBy = 'You'
        }else{
            uploadedBy = 'Consultant'
        }
    }
    return(
        <div className={container + " " + "docCardUpdate"}>
            <div className="topRow">
                <span className="name">{doc_type}</span>
                <img className="dotMenu" src={ASSETS_BASE_URL+"/images/common/dotMenu.svg"} alt="menu" onClick={toggleMenuBar}/>
            </div>
            <div className="bottomRow">
                <span className="docDate"><span className="docHeading">Uploaded By:</span>{uploadedBy}</span>
                <span className="docDate"><span className="docHeading">File name:</span>{orignal_file_name}</span>
                <span className="docDate docTime"><span className="docHeading">Uploaded On:</span>{formattedDate} {getFormattedTime(created_at)}</span>
            </div>
            {/* <div className="docOverlay"></div> */}
            {
                showMenuBar?<DocumentModal id={id} docId={doc_id} toggle={toggleMenuBar} orignal_file_name={orignal_file_name} downloadDocumentClicked={downloadDocumentClicked} deleteDocumentClicked={deleteDocumentClicked}/>:null
            }
        </div>
    )
}

export default DocumentCard;