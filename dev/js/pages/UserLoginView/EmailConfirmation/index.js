import React, { useState } from 'react';
import { resetPasswordLink } from '../../../actions/index.js';
import { useDispatch } from 'react-redux';
import { style } from './style';

function EmailConfirmation(props) {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const emailLoginHnadler = (event) => {
    setEmail(event.target.value);
  };

  const loginSubmitHnadler = (event) => {
    event.preventDefault();
    if (email === '') {
      return;
    }
    resetPasswordLink({ email }, dispatch, (err, data) => {
      if (data) {
        setErrorMessage(false);
        setSuccessMessage(true);
        setEmail('');
        setTimeout(() => {
          props.history.push('/reset-password');
        }, 10000);
      }
      if (err) {
        setErrorMessage(true);
        setSuccessMessage(false);
      }
    });
  };

  return (
    <div className={style({})}>
      <div className="container">
        <img
          className="keel-logo"
          src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
          alt="keel-logo"
        />
        <h3 className="header-text">Reset Your Password</h3>
        <p className="sub-heading">
          Please enter your registered e-mail address
        </p>
        <form className="form-wrapper" onSubmit={loginSubmitHnadler}>
          <input
            className="login-email-input"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={emailLoginHnadler}
          />
          {successMessage && (
            <p className="email-success-msg">
              A verification OTP has been sent to your email address. Use that
              to reset your password.
            </p>
          )}
          {errorMessage && (
            <p className="email-fail-msg">
              This is not a registered email address
            </p>
          )}
          <button className="submit-button">Submit</button>
        </form>
      </div>
      <img
        className="passport-image"
        src={ASSETS_BASE_URL + '/images/Login/password-reset-image.jpeg'}
        alt="passport-image"
      />
    </div>
  );
}

export default EmailConfirmation;
