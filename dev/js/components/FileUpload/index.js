import React, { useState } from 'react';
import { fileUpload, fileUploadWrapper, selectedFileText, outerShell, innerShell, closeWrapper, fileButton, submitButtonWrapper, submitButton, fileData } from './style.js';
import CustomDropDown from '@components/CustomDropDown';
import { useDispatch, useSelector } from 'react-redux';

const FileUpload = (props) => {

    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFileType, setSelectedFileType] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');
    const [options, setOptions] = useState([
        {
            value: 1,
            displayName: "Aadhar Card"
        },
        {
            value: 2,
            displayName: "PAN Card"
        },
        {
            value: 3,
            displayName: "Driving License"
        },
        {
            value: 4,
            displayName: "Other"
        }
    ]);
    const close = () => {
        props.fileUploadModalClosed(false);
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
    const uploadFile = () => {
        props.uploadFile({
            selectedFile: selectedFile,
            selectedFileName: selectedFileName,
            selectedFileType: selectedFileType,
        })
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
    return (
        <div className={outerShell}>
            <span onClick={close} className={closeWrapper}>x</span>
            <div className={innerShell}>
                <div className={fileUploadWrapper}>
                    <input id="file" className={fileUpload} type="file" onChange={onFileChange} />
                </div>
                <div className={fileData}>{displayFileData()}</div>
                <CustomDropDown list={options} optionSelected={handleOptionChange}></CustomDropDown>
                <div className={submitButtonWrapper}>
                    <button onClick={uploadFile} className={submitButton}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;