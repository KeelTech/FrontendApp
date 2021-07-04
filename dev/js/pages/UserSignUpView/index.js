import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LinkedIn as LinkedInLogin } from 'react-linkedin-login-oauth2';
import { googleButtonStyle } from './style.js';
import { userSignUp } from '../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { style } from './style.js';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);

  const dispatch = useDispatch();

  const emailSignUpHnadler = (event) => {
    setEmail(event.target.value);
  };

  const passwordSignUpHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUpSubmitHnadler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      userSignUp({ email, password }, dispatch, (err, data) => {
        if (data) {
          console.log('data', data);
        }
        if (err) {
          console.log(err);
        }
      });
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseLinkedin = (response) => {
    console.log(response);
  };

  return (
    <div className={style({})}>
      <div className="passport-image">
        <img
          className="bg-image"
          src={ASSETS_BASE_URL + '/images/Signup/passport-image.jpeg'}
          alt="keel-logo"
        />
        <img
          className="logo"
          src={ASSETS_BASE_URL + '/images/login/keel-logo.svg'}
          alt="keel-logo"
        />
      </div>
      <div className="container">
        <p className="header-text">Sign Up to Continue</p>
        <form onSubmit={signUpSubmitHnadler}>
          <input
            placeholder="E-mail / username"
            type="email"
            value={email}
            onChange={emailSignUpHnadler}
          />
          <input
            className="password-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordSignUpHandler}
          />
          <input
            className="confirm-password-field"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          />
          <button className="log-in-button">Sign Up</button>
        </form>
        {passwordValidation && (
          <p className="password-validation">Passwords do not match</p>
        )}
        <p className="login-divider">
          <span>Or sign up with </span>
        </p>
        <GoogleLogin
          clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
          buttonText="Login"
          theme="dark"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} style={googleButtonStyle}>
              G
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          textButton=""
          callback={responseFacebook}
          cssClass="facebook-button"
          icon="fa-facebook"
        />
        <LinkedInLogin
          clientId="81lx5we2omq9xh"
          onFailure={responseLinkedin}
          onSuccess={responseLinkedin}
          redirectUri="http://localhost:3000/linkedin"
        >
          <button className="linkedin-button">in</button>
        </LinkedInLogin>
        <p className="signup-divider">
          <span>If you're already a member!</span>
        </p>
        <Link to='/'>
          <button className="sign-up-button">Log In</button>
          </Link>
      </div>
    </div>
  );
}

export default SignUp;
