import React from 'react';
import { progressBar } from './style.js';

const CreateProfile = () => {

    return (
        <div className={progressBar}>
            <div className="desktopProgressBar">
                <div className="leftPorgressBar">
                    <ul class="progressbar">
                        <li class="active"></li>
                        <li class=""></li>
                        <li></li>
                    </ul>
                </div>
                <div className="userFormsMainContainer">
                    <h3>A Bit about you</h3>
                    <div className="formsScroll">
                        <div className="formWrapper">
                            <label>Name<sup>*</sup></label>
                            <div className="inpCont">
                                <input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="formWrapper inpMobile">
                            <label>Contact Number<sup>*</sup></label>
                            <div className="inpCont">
                                <input type="number" placeholder="Mobile" />
                                <select>
                                    <option>+91</option>
                                    <option>+92</option>
                                    <option>+93</option>
                                </select>
                            </div>
                        </div>
                        <div className="formWrapper">
                            <label>Your Country<sup>*</sup></label>
                            <div className="selectBox">
                                <select placeholder="Select Your Country">
                                    <option>Name 1</option>
                                    <option>Name 2</option>
                                    <option>Name 3</option>
                                    <option>Name 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="formWrapper">
                            <label>Select the Country to Travel<sup>*</sup></label>
                            <div className="selectBox">
                                <select placeholder="India">
                                    <option>Name 1</option>
                                    <option>Name 2</option>
                                    <option>Name 3</option>
                                    <option>Name 4</option>
                                </select>
                            </div>
                        </div>
                        {/* ================== MORE DATA SCROLL */}
                        <div className="formWrapper">
                            <label>Name<sup>*</sup></label>
                            <div className="inpCont">
                                <input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="formWrapper inpMobile">
                            <label>Contact Number<sup>*</sup></label>
                            <div className="inpCont">
                                <input type="number" placeholder="Mobile" />
                                <select>
                                    <option>+91</option>
                                    <option>+92</option>
                                    <option>+93</option>
                                </select>
                            </div>
                        </div>
                        <div className="formWrapper">
                            <label>Your Country<sup>*</sup></label>
                            <div className="selectBox">
                                <select placeholder="Select Your Country">
                                    <option>Name 1</option>
                                    <option>Name 2</option>
                                    <option>Name 3</option>
                                    <option>Name 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="formWrapper">
                            <label>Select the Country to Travel<sup>*</sup></label>
                            <div className="selectBox">
                                <select placeholder="India">
                                    <option>Name 1</option>
                                    <option>Name 2</option>
                                    <option>Name 3</option>
                                    <option>Name 4</option>
                                </select>
                            </div>
                        </div>
                        {/* ================== MORE DATA SCROLL */}
                    </div>
                    <div className="btnCont">
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile;