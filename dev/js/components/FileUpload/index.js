import React, { Component } from 'react';
import { fileUpload, fileUploadWrapper, selectedFileText, outerShell, innerShell, closeWrapper, fileButton, submitButtonWrapper, submitButton, fileData } from './style.js';
import CustomDropDown from '@components/CustomDropDown';
class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            selectedFileType: null,
            options: [
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
            ]
        };
    }
    close = () => {
        this.props.fileUploadModalClosed(false);
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedFileName: event.target.files[0].name });
    };
    btnClickedUpload = () => {
        document.getElementById("file").click();
    }
    handleOptionChange = (item) => {
        this.setState({ selectedFileType: item });
    }
    uploadFile = () => {
        this.props.uploadFile({
            selectedFile: this.state.selectedFile,
            selectedFileName: this.state.selectedFileName,
            selectedFileType: this.state.selectedFileType,
        })
    }
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <span className={selectedFileText}>
                    <b>{this.state.selectedFile.name}</b> is selected
                </span>
            );
        }
        else {
            return (
                <button onClick={this.btnClickedUpload} className={fileButton}>
                    Select File
                </button>
            );
        }
    };
    render() {
        return (
            <div className={outerShell}>
                <span onClick={this.close} className={closeWrapper}>x</span>
                <div className={innerShell}>
                    <div className={fileUploadWrapper}>
                        <input id="file" className={fileUpload} type="file" onChange={this.onFileChange} />
                    </div>
                    <div className={fileData}>{this.fileData()}</div>
                    <CustomDropDown list={this.state.options} optionSelected={this.handleOptionChange}></CustomDropDown>
                    <div className={submitButtonWrapper}>
                        <button onClick={this.uploadFile} className={submitButton}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileUpload;