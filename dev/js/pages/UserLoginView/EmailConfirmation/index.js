import React, { useState, Fragment } from 'react';
import { resetPasswordLink } from '../../../actions/index.js';
import { useDispatch } from 'react-redux';
import LoadingWidget from '@components/LoadingWidget';
import { style, Loader } from './style';
import { Link } from 'react-router-dom';

function EmailConfirmation(props) {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showInputFields, setShowInputFields] = useState(true);
  const [timer, setTimer] = useState(10);
  const [showLoader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const emailLoginHnadler = (event) => {
    setEmail(event.target.value);
  };

  const logoClick = () => {
    props.history.push('/');
  };

  const loginSubmitHnadler = (event) => {
    event.preventDefault();
    if (email === '') {
      return;
    }
    setLoader(true);
    resetPasswordLink({ email }, dispatch, (err, data) => {
      if (data) {
        setShowInputFields(false);
        setEmail('');
        setErrorMessage(false);
        setSuccessMessage(true);
        setLoader(false);
        setTimeout(() => {
          props.history.push('/reset-password');
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
        setSuccessMessage(false);
      }
    });
  };

  return (
    <Fragment>
      {showLoader && (
        <div className={Loader}>
          <LoadingWidget />
        </div>
      )}
      <div className={style({})}>
        <div className="container">
          <img
            className="keel-logo"
            src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
            alt="keel-logo"
            onClick={() => logoClick()}
          />
          <h3 className="header-text">Reset Your Password</h3>
          <p className="sub-heading">
            Please enter your registered e-mail address
          </p>
          {showInputFields && (
            <form className="form-wrapper" onSubmit={loginSubmitHnadler}>
              <input
                className="login-email-input"
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={emailLoginHnadler}
                autoComplete="off"
              />
              <button className="submit-button">Submit</button>
            </form>
          )}
          {successMessage && (
            <div>
              <p className="email-success-msg">
                A verification OTP has been sent to your email address. Use that
                to reset your password.
              </p>
              <p className="timerMsg">
                Redirecting to a new page in
                <span className="timer">{timer}</span>
                seconds
              </p>
              <p className="emailSuccessBtnMsg">
                Or you can click the button below
              </p>
              <Link to="/reset-password" className="BtnLink">
                <button className="LinkBtn">Password Reset</button>
              </Link>
            </div>
          )}
          {errorMessage && (
            <p className="email-fail-msg">
              This is not a registered email address
            </p>
          )}
        </div>
        <img
          className="passport-image"
          src={ASSETS_BASE_URL + '/images/Login/password-reset-image.jpeg'}
          alt="passport-image"
        />
      </div>
    </Fragment>
  );
}

export default EmailConfirmation;
