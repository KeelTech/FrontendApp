import React, { useState } from 'react';
import { resetPassword } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { style } from './style';

function PasswordReset(props) {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [showInputFields, setShowInputFields] = useState(true);

  const dispatch = useDispatch();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const otpHandler = (event) => {
    setOtp(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (password === '') {
      return;
    }
    if (password !== confirmPassword) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      resetPassword({ otp, password }, dispatch, (err, data) => {
        if (data) {
          setShowInputFields(false);
          setSuccessMessage(true);
          setOtp('');
          setPassword('');
          setConfirmPassword('');
          setTimeout(() => {
            props.history.push('/');
          }, 10000);
        }
        if (err) {
          setSuccessMessage(false);
        }
      });
    }
  };

  return (
    <div className={style}>
      <div className="container">
        <img
          className="keel-logo"
          src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
          alt="keel-logo"
        />
        <h1 className="header-text">Reset Password</h1>

        {showInputFields && (
          <form className="form-wrapper" onSubmit={submitHandler}>
            <input
              placeholder="Enter OTP"
              type="text"
              value={otp}
              onChange={otpHandler}
              autocomplete="off"
            />
            <input
              placeholder="New Password"
              type="password"
              value={password}
              onChange={passwordHandler}
              autocomplete="off"
            />
            <input
              placeholder="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              autocomplete="off"
            />
            {passwordValidation && (
              <p className="password-match">Passwords do not match</p>
            )}
            <button className="reset-pass-button">Reset Password</button>
          </form>
        )}
        {successMessage && (
          <p className="password-success">
            New Password has been successfully set up. Please log in with the
            new password
          </p>
        )}
      </div>
      <img
        className="globe-image"
        src={ASSETS_BASE_URL + '/images/Login/globe-image.jpeg'}
        alt="globe"
      />
    </div>
  );
}

export default PasswordReset;
