import React, { Component } from 'react';
import { fileUpload, fileUploadWrapper, ddContainer, ddContainerItem, ddContainerItemHeader, selectedFileText, outerShell, innerShell, closeWrapper, chevronDown, fileButton, fileData, optionMenu } from './style.js';

class FileUpload extends Component {
    state = {
        selectedFile: null,
        selectedFileType: null,
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
    onOptionChange = event => {
        console.log(event.target.value)
        this.setState({ selectedFileType: event.target.value });
    }
    btnClickedUpload = () => {
        document.getElementById("file").click();
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
                    <div className={ddContainer}>
                        <div className={ddContainerItemHeader}>
                            <select onChange={this.onOptionChange} className={optionMenu}>
                                <option className={ddContainerItem} value="">Search or Select Type</option>
                                <option className={ddContainerItem} value="Aadhar Card">Aadhar Card</option>
                                <option className={ddContainerItem} value="PAN Card">PAN Card</option>
                                <option className={ddContainerItem} value="Driving License">Driving License</option>
                                <option className={ddContainerItem} value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileUpload;