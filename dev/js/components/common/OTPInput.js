import React from 'react';
// import SingleInput from './SingleInput.js'

class OTPInput extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			length: this.props.length,
            autoFocus: this.props.autoFocus,
            disabled: false,
            onChangeOTP:this.props.onChangeOTP,
            inputClassName:this.props.inputClassName,
            activeInput:'',
            setActiveInput:'',
            otpValues: new Array(this.props.length),
            setOTPValues:''
		  }
	  }

    _handleOnFocus(index) {
    }

    _handleOnChange(e) {
    }
  
    _handleOnBlur() {
    }
  
    handleOnKeyDown() {
    }
    
    _handleOnPaste() {
    }
    render() {
      <div></div>
      // return (
      //   <div>
      //     {this.state.setOTPValues ? this.state.setOTPValues.map((val, index) => 
      //         <SingleInput
      //           key={`SingleInput-${index}`}
      //           focus={thi.state.activeInput === index}
      //           value={val}
      //           autoFocus={this.state.autoFocus}
      //           onFocus={this._handleOnFocus.bind(this, index)}
      //           onChange={this._handleOnChange.bind(this)}
      //           onKeyDown={this._handleOnKeyDown.bind(this)}
      //           onBlur={this._handleOnBlur.bind(this)}
      //           onPaste={this._handleOnPaste.bind(this)}
      //           style={this.state.inputStyle}
      //           className={thi.state.inputClassName}
      //           disabled={this.state.disabled}
      //         />):""
      //     }
      //   </div>
      // );
  }
}

export default OTPInput;
