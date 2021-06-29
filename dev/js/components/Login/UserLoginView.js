import React from 'react';
import { connect } from 'react-redux';
import { sendOTP, submitOTP } from '../../actions/index.js'
import OtpInput from 'react-otp-input';
// const queryString = require('query-string');
import STORAGE from '../../helpers/storage'

class UserLoginView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneNumber:'',
			validationError:false,
			otpGenerateError:false,
			showOTPComp:false,
			otp:'',
			time:30
		}
	}

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0)
		}
		// this.startTimer()
	}

    inputHandler(e) {
        if (e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value })
        }
	}

	handleOTPSubmit(otp) {
		this.setState({ otp });
    }

    _handlesendOTPPress(e) {
        if (e.key === 'Enter') {
            if (!this.state.showOTPComp) {
                this.submitOTPRequest(this.state.phoneNumber)
            }
        }
	}

	startTimer = () => {
		if (this.state.time > 0) {
		  	setInterval(this.countDown, 1000);
		}
	}
	countDown = () => {
		let seconds = this.state.time - 1;
		this.setState({
			time: seconds
		});
	}

	submitOTPRequest(number, resendFlag = false) {
       
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: false })
            this.props.sendOTP(number,  'user-login', (error, data) => {
                if (data && data.statusCode == 1) {
					this.setState({ otpGenerateError: false, showOTPComp: true, time: 30  })
                } else {
					this.setState({ otpGenerateError: true })
						
                }
            })
        } else {
            this.setState({ validationError: true })
        }
	}

	handleOtpRestart() {
		this.setState({ otp: '', validationError:false, showOTPComp:false })
	}

    verifyOTP() {
        if (!this.state.otp || this.state.otp.length < 4 ) {
            this.setState({ validationError: true })
            return
        }
	
		this.setState({ validationError: false })
		this.props.submitOTP(this.state.phoneNumber, this.state.otp, (err, resp) => {

			if(resp && resp.cid){
					this.props.history.push('/dashboard');
			}
			else{
				this.setState({validationError: true})
			}
		})
    }

	render() {
		if(STORAGE.checkAuth() && STORAGE.checkNumber()){
			this.props.history.push('/dashboard')
		}
		
		return (
				<section className="health-id-login-section">
					<div className="health-id-login-section-left">
						<img src={ASSETS_BASE_URL+"/images/health-login-graphic-desktop.svg"} alt="DocprimeDHM" />
						<div className="health-id-login-banner">
							<h1>Manage Health Records</h1>
							<p>You can manage health id and create new health id for family</p>
						</div>
					</div>
					<div className="health-id-login-section-right">
						<div className="logo">
							<img src={ASSETS_BASE_URL + "/images/doc-prime-logo-mobile.svg"} className="hide-desktop" />
						</div>
						<div className="health-id-login-container">
							<div className="logo">
								<img src={ASSETS_BASE_URL+"/images/doc-prime-logo-desktop.svg"} alt="CreateHEalthID" className="hide-mobile" />
							</div>
							<img src={ASSETS_BASE_URL+"/images/health-login-graphic-mobile.svg"} alt="mobile" className="mobile-login-graphic hide-desktop" />
							{ !this.state.showOTPComp ? <div className="health-id-login">
								<h1>Manage Your Health Records</h1>
								<p>Login to access your medical records and all your Health IDs</p>
								<div className="input-field mobile">
									<input type="number" onChange={this.inputHandler.bind(this)} name="phoneNumber" defaultValue={this.state.phoneNumber} onKeyPress={this._handlesendOTPPress.bind(this)}  id="mobile" maxLength={10} />
								<span>+91</span>
								<label htmlFor="mobile">Mobile Number</label>
								</div>
								{this.state.otpGenerateError ? <p>Error Generating OTP</p>:"" }
								{this.state.validationError ? <p>Please provide a valid phone number</p>:"" }
								<button className={this.props.otp_request_sent? "disabled primary-button": "primary-button"} onClick={this.submitOTPRequest.bind(this, this.state.phoneNumber, false )}  disabled={this.props.otp_request_sent}  id="send-otp">
									{this.props.otp_request_sent ?
									<React.Fragment> <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/><span>Sending</span></React.Fragment> :
									<span>Send OTP</span> }
								</button>
							</div>
							: 
								<div className="health-id-verify-otp">
								<p>OTP sent to</p>
								<div className="mobile" onClick={this.handleOtpRestart.bind(this)}>
									<img src={ASSETS_BASE_URL+"/images/icon-mobile.svg"} alt="mobile" className="icon-mobile" />
									<span>+91</span>
									<span name="customer-mobile" id="customer-mobile" > {this.state.phoneNumber} </span>
									<img  src={ASSETS_BASE_URL+"/images/icon-edit.svg"} alt="DocprimeDHM" className="icon-edit" />
								</div>
								<div className="otp-section">
									<div className="otpContainer">
										<OtpInput
											value={this.state.otp}
											onChange={this.handleOTPSubmit.bind(this)}
											numInputs={4}
											// separator={<span>&nbsp;</span>}
											inputStyle='otp'
											containerStyle='input-field'
											shouldAutoFocus='true'
											isInputNum='true'
										/>

									</div>
								</div>
								{this.state.validationError ? <p>Please provide a valid OTP</p>:"" }
								{this.props.error_message ? <p>{this.props.error_message}</p>:"" }
								<button onClick={this.verifyOTP.bind(this)}  disabled={this.props.submit_otp} className={this.props.submit_otp? "disabled primary-button": "primary-button"} id="verify-otp">
							
									{this.props.submit_otp ?
										<React.Fragment> <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/><span>Verifying</span></React.Fragment> :
										 <span>Verify OTP</span> }
								</button>
							</div>
							}
						</div>
					</div>
				</section>
		);
	}
}

const mapStateToProps = (state) => {
    let {
        cid,
        success_message,
		error_message,
        otp_request_sent,
        otp_request_success,
        otp_request_fail,
        submit_otp,
        submit_otp_success,
        submit_otp_fail,
        phoneNumber
    } = state.AUTH

    return {
		cid,
        success_message,
		error_message,
        otp_request_sent,
        otp_request_success,
        otp_request_fail,
        submit_otp,
        submit_otp_success,
        submit_otp_fail,
        phoneNumber,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendOTP: (number, messageType, cb) => dispatch(sendOTP(number, messageType,  cb)),
        submitOTP: (number, otp, cb) => dispatch(submitOTP(number, otp, cb)),
        // resetAuth: () => dispatch(resetAuth()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserLoginView);
