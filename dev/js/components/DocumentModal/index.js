import React, { useRef } from 'react';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { container, menuBar } from './style.js';

const DocumentCardModal = ({ id, docId, toggle, deleteDocumentClicked, downloadDocumentClicked })=>{
    const modalRef = useRef();
    return(
        <div className={container + " " + "attachDrop"} ref={modalRef}>
            <DetectClickOutside targetRef={modalRef} clickOutside={toggle}>
                <div className={menuBar + " " + "attachDropMenu"}>
                    <span onClick={()=>{
                        toggle();
                        downloadDocumentClicked({id, docId})
                    }}>Download</span>
                    <span onClick={()=>{
                        toggle();
                        deleteDocumentClicked({id})
                    }}>Delete</span>
                </div>
            </DetectClickOutside>
        </div>
    )
}

export default DocumentCardModal;

