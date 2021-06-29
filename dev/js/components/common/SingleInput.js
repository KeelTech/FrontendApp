// import React, { memo, useRef, useLayoutEffect }  from 'react';

// class SingleInput extends React.Component {
//     constructor(props) {
// 		super(props);
// 		this.state = {
// 			focus: this.props.focus,
//             autoFocus: this.props.autoFocus,
//             disabled: false,
//             onChangeOTP:this.props.onChangeOTP,
//             inputClassName:this.props.inputClassName,
//             activeInput:'',
//             setActiveInput:'',
//             otpValues: new Array(this.props.length),
//             setOTPValues:''
// 		  }
// 	  }
//       const inputRef = useRef<HTMLInputElement>(null);
//     const prevFocus = usePrevious(!!focus);
//   useLayoutEffect(() => {
//     if (inputRef.current) {
//       if (focus && autoFocus) {
//         inputRef.current.focus();
//       }
//       if (focus && autoFocus && focus !== prevFocus) {
//         inputRef.current.focus();
//         inputRef.current.select();
//       }
//     }
//   }, [autoFocus, focus, prevFocus]);

//   return <input ref={inputRef} {...rest} />;
// }


// export default SingleInput