import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DocumentModal from '@components/DocumentModal';
import { getFormattedTime, getFormattedDate } from '@helpers/utils.js';
import { container } from './style.js';

const DocumentCard = ({ documentData, downloadDocumentClicked, deleteDocumentClicked, verifyDocumentClicked }) => {
    const logginInfo = useSelector(state => state.LOGIN);
    const { isAgent } = logginInfo || {};

    const [showMenuBar, setMenuBar] = useState(false);

    const { doc_type, created_at, id, doc_id, orignal_file_name, user_type = '', verification_status } = documentData;

    const { formattedDate } = getFormattedDate(created_at);

    const toggleMenuBar = () => {
        setMenuBar(val => !val)
    }
    let uploadedBy = '';
    if (isAgent) {
        if (user_type == 'CUSTOMER') {
            uploadedBy = 'Customer'
        } else {
            uploadedBy = 'You'
        }
    } else {
        if (user_type == 'CUSTOMER') {
            uploadedBy = 'You'
        } else {
            uploadedBy = 'Consultant'
        }
    }

    const verificationWidget = () => {
        if (isAgent) {

            if(verification_status==1){
                return <div className='ctaDtls'>
                    <button className='aprvBtn'  onClick={() => verifyDocumentClicked(doc_id, 'Approve')}>Approve</button>
                    <button className='rjctBtn' onClick={() => verifyDocumentClicked(doc_id, 'Reject')}>Reject</button>
                </div>
            }
            return <div></div>
        }
    }

    let status = 'Pending'
    let verifyCls = 'verfyStatus pendingState';
    if(verification_status==2){
        status= 'Rejected';
        verifyCls='verfyStatus rjctSp'
    }else if(verification_status==3){
        status = 'Approved';
        verifyCls = 'verfyStatus apprvSp'
    }
    return (
        <div className={container + " " + "docCardUpdate"}>
            <div className="topRow">
                <span className="name">{doc_type}</span>
                <img className="dotMenu" src={ASSETS_BASE_URL + "/images/common/dotMenu.svg"} alt="menu" onClick={toggleMenuBar} />
            </div>
            <div className="bottomRow">
                <span className="docDate"><span className="docHeading">Uploaded By:</span>{uploadedBy}</span>
                <span className="docDate"><span className="docHeading">File name:</span>{orignal_file_name}</span>
                <span className="docDate docTime"><span className="docHeading">Uploaded On:</span>{formattedDate} {getFormattedTime(created_at)}</span>
                <div className="docDate">
                    <span className="docHeading">Verification Status:<span className={`${verifyCls}`}>{status}</span></span>
                </div>
                {verificationWidget()}
            </div>
            {/* <div className="docOverlay"></div> */}
            {
                showMenuBar ? <DocumentModal id={id} docId={doc_id} toggle={toggleMenuBar} orignal_file_name={orignal_file_name} downloadDocumentClicked={downloadDocumentClicked} deleteDocumentClicked={deleteDocumentClicked} hideDelete={isAgent?true:false}/> : null
            }
        </div>
    )
}

export default DocumentCard;