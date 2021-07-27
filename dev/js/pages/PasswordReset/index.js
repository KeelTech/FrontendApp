import React, { useState, Fragment } from 'react';
import { resetPassword } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { style, Loader } from './style';
import { Link } from 'react-router-dom';

function PasswordReset(props) {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showInputFields, setShowInputFields] = useState(true);
  const [timer, setTimer] = useState(10);
  const [showLoader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const logoClick = () => {
    props.history.push('/');
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
      setLoader(true);
      resetPassword({ otp, password }, dispatch, (err, data) => {
        if (data) {
          setShowInputFields(false);
          setSuccessMessage(true);
          setOtp('');
          setPassword('');
          setConfirmPassword('');
          setLoader(false);
          setTimeout(() => {
            props.history.push('/');
          }, 10000);
          var timeleft = 10;
          var RedirectTimer = setInterval(function () {
            timeleft--;
            setTimer(timeleft);
            if (timeleft <= 0) clearInterval(RedirectTimer);
          }, 1000);
        }
        if (err) {
          setLoader(false);
          setErrorMessage(true);
        }
      });
    }
  };

  return (
    <Fragment>
      {showLoader && (
        <div className={Loader}>
          <LoadingWidget />
        </div>
      )}
      <div className={style}>
        <div className="container">
          <img
            className="keel-logo"
            src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
            alt="keel-logo"
            onClick={() => logoClick()}
          />
          <h1 className="header-text">Reset Password</h1>

          {showInputFields && (
            <form className="form-wrapper" onSubmit={submitHandler}>
              <input
                placeholder="Enter OTP"
                type="text"
                value={otp}
                onChange={otpHandler}
                autoComplete="off"
              />
              <input
                placeholder="New Password"
                type="password"
                value={password}
                onChange={passwordHandler}
                autoComplete="off"
              />
              <input
                placeholder="Confirm New Password"
                type="password"
                value={confirmPassword}
                onChange={confirmPasswordHandler}
                autoComplete="off"
              />
              {passwordValidation && (
                <p className="password-match">Passwords do not match</p>
              )}
              <button className="reset-pass-button">Reset Password</button>
            </form>
          )}
          {successMessage && (
            <Fragment>
              <p className="password-success">
                New Password has been successfully set up. Redirecting to login
                page in <span className="timer">{timer}</span> seconds
              </p>
              <p className="emailSuccessBtnMsg">
                Or you can click the button below
              </p>
              <Link to="/" className="BtnLink">
                <button className="LinkBtn">Login</button>
              </Link>
            </Fragment>
          )}
          {errorMessage && (
            <p className="errorMsg">
              Failed to authenticate OTP, either OTP is invalid or timed out.
            </p>
          )}
        </div>
        <img
          className="globe-image"
          src={ASSETS_BASE_URL + '/images/Login/globe-image.jpeg'}
          alt="globe"
        />
      </div>
    </Fragment>
  );
}

export default PasswordReset;
