import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fileUpload, fileUploadWrapper, selectedFileText, outerShell, innerShell, closeWrapper, fileButton, submitButtonWrapper, submitButton, fileData } from './style.js';
import CustomDropDown from '@components/CustomDropDown';
import { uploadDocument, getDocumentTypes } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loaderView } from '@constants';
import CustomToaster from '@components/CustomToaster';

const FileUpload = ({ fileUploadModalClosed, uploadFile, isUploadToServer=false, taskId }) => {
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
    const [loading, setLoading] = useState(false);
    const [documentTypes, setDocumentTypes] = useState([]);

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

    const uploadFileToServer = (val)=>{
        setLoading(true);
        const { selectedFile,  selectedFileType } = val;
        const formData = new FormData();
        formData.append('doc_file', selectedFile);
        formData.append('doc_type', selectedFileType && selectedFileType.value);
        if(taskId){
            formData.append('task_id', taskId);            
        }
        uploadDocument(formData, dispatch, (resp, error)=>{
            setLoading(false);
            uploadFile({}, resp);
        })
    }

    const handleUploadFile = () => {
        let errorMsg = '';
        if(!selectedFile){
            errorMsg= 'Please Select File';
        }else if(!(selectedFileType && selectedFileType.value)){
            errorMsg = 'Please Select Document Type';
        }
        if(errorMsg){
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: errorMsg
            });
            setTimeout(() => {
                hideToaster();
            }, 1000);
            return;
        }
        const dataParams = {
            selectedFile: selectedFile,
            selectedFileName: selectedFileName,
            selectedFileType: selectedFileType,
        }
        if(isUploadToServer){
            uploadFileToServer(dataParams);
        }else{
            uploadFile(dataParams);
        }
    }
    const displayFileData = () => {
        if (selectedFile) {
            return (
                <span className={selectedFileText}>
                    <b>{selectedFile.name}</b> is selected
                </span>
            );
        }
        else {
            return (
                <button onClick={btnClickedUpload} className={fileButton}>
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

    return (
        <div className={outerShell}>
            {
                loading && <div className={loaderView}><LoadingWidget/></div>
            }
            <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
            <span onClick={close} className={closeWrapper}>x</span>
            <div className={innerShell}>
                <div className={fileUploadWrapper}>
                    <input id="file" className={fileUpload} type="file" onChange={onFileChange} />
                </div>
                <div className={fileData}>{displayFileData()}</div>
                <CustomDropDown list={documentTypes} optionSelected={handleOptionChange}></CustomDropDown>
                <div className={submitButtonWrapper}>
                    <button onClick={handleUploadFile} className={submitButton}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;