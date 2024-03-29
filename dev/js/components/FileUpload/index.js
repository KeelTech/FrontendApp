import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadDocument, getDocumentTypes } from '@actions';
import { fileUpload, fileUploadWrapper, selectedFileText, outerShell, innerShell, closeWrapper, fileButton, submitButtonWrapper, submitButton, fileData } from './style.js';
import CustomDropDown from '@components/CustomDropdown';
import CustomToaster from '@components/CustomToaster';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import { useSelector } from 'react-redux';

const FileUpload = ({ fileUploadModalClosed, uploadFile, isUploadToServer=false, task_id, maxWidth="890px", caseId="" }) => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFileType, setSelectedFileType] = useState({});
    const [selectedFileName, setSelectedFileName] = useState('');
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [documentTypes, setDocumentTypes] = useState([]);
    const [loading, setLoading] = useState('');

    const logginInfo = useSelector(state => state.LOGIN);
    const { isAgent } = logginInfo || {};

    useEffect(()=>{
        setLoading(true);
        getDocumentTypes({}, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp && resp.data && resp.data.length){
                const filterData = resp.data.map((val)=>{
                    return {
                        value: val.id,
                        displayName: val.doc_type_name
                    }
                })
                setDocumentTypes(filterData);
            }else{
                handleResponse(null, '', 'Failed to Fetch document type');
            }
        })
    },[])

    const close = () => {
        fileUploadModalClosed(false);
    }

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        if (event.target.files[0]) {
            setSelectedFileName(event.target.files[0].name);
        }
        else {
            setSelectedFileName('');
        }
    };

    const btnClickedUpload = () => {
        document.getElementById("file").click();
    }

    const handleOptionChange = (item) => {
        setSelectedFileType(item);
    }

    const handleUploadFile = () => {
        let errorMsg = '';
        if(!selectedFile){
            errorMsg= 'Please Select File';
        }else if(!(selectedFileType && selectedFileType.value)){
            errorMsg = 'Please Select Document Type';
        }
        if(errorMsg){
            handleResponse(null, '', errorMsg);
            return;
        }
        const selectedFileData = {
            selectedFile: selectedFile,
            selectedFileName: selectedFileName,
            selectedFileType: selectedFileType,
        }
        if(isUploadToServer){
            uploadFileToServer(selectedFileData)
        }else{
            uploadFile(selectedFileData);
        }
    }

    const displayFileData = () => {
        if (selectedFile) {
            return (
                <span className={selectedFileText + " " + "SelecTFileText"}>
                    <b>{selectedFile.name}</b> is selected
                </span>
            );
        }
        else {
            return (
                <button onClick={btnClickedUpload} className={fileButton + " " + "FiLeButtoN"}>
                    Select File
                </button>
            );
        }
    };

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }

    const handleResponse = (resp, msg='Uploaded Successfully', errorMsg="Failed, Try again later")=>{
        if(resp){
            setToasterInfo({
                isVisible: true,
                isError: false,
                isSuccess: true,
                msg
            });
        }else{
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: errorMsg
            });
        }
        setTimeout(() => {
            hideToaster();
        }, 1000);
    }

    const uploadFileToServer = (val)=>{
        setLoading(true);
        const { selectedFile,  selectedFileType } = val;
        const formData = new FormData();
        formData.append('doc_file', selectedFile);
        formData.append('doc_type', selectedFileType && selectedFileType.value);
        if(caseId){
            formData.append('case', caseId);
        }
        if(task_id){
            formData.append('task_id', task_id);            
        }
        uploadDocument(formData, dispatch, (resp, error)=>{
            setLoading(false);
            uploadFile({}, resp);
        })
    }

    return (
        <div className="overLayPopUp">
            <div className={outerShell({maxWidth}) + " " + "innerPopUp"}>
            {
                loading?<div className={loaderView}><LoadingWidget/></div>:null
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <span onClick={close} className={closeWrapper + " " + "mr-1 popUpInClose"}><img className="crossIcon" src={ASSETS_BASE_URL+"/images/common/x_black.svg"} alt="close"/></span>
            <div className={innerShell  + " " + "InnerShellN"}>
                <div className={fileUploadWrapper  + " " + "FileUpldWrap"}>
                    <input id="file" className={fileUpload  + " " + "FileUpLoad"} type="file" onChange={onFileChange} accept="image/*;capture=camera"/>
                </div>
                <div className={fileData  + " " + "FileDataN"}>{displayFileData()}</div>
                <CustomDropDown list={documentTypes} optionSelected={handleOptionChange}></CustomDropDown>
                <div className={submitButtonWrapper  + " " + "PopDubBtnCont"}>
                    <button onClick={handleUploadFile} className={submitButton + " " + "PopDubButtonS"}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FileUpload;