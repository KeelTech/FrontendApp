import React, { Component } from 'react';
import { fileUpload, fileUploadWrapper, ddContainer, ddContainerItem, ddContainerItemHeader, selectedFileText, outerShell, innerShell, closeWrapper, chevronDown, fileButton, fileData, optionMenu } from './style.js';
import CustomDropDown from '@components/CustomDropDown';

class FileUpload extends Component {
    state = {
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
    close = () => {
        this.props.fileUploadModalClosed({
            selectedFile: this.state.selectedFile,
            selectedFileType: this.state.selectedFileType,
        })
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
        if (event.target.files[0]) {
            const formData = new FormData();
            formData.append(
                "myFile",
                event.target.files[0],
                event.target.files[0].name
            );
            this.props.fileUploaded(formData);
        }
    };
    btnClickedUpload = () => {
        document.getElementById("file").click();
    }
    handleOptionChange = (item) => {
        this.setState({ selectedFileType: item });
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
                </div>
            </div>
        );
    }
}

export default FileUpload;