import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LinkedIn as LinkedInLogin } from 'react-linkedin-login-oauth2';
import {
  googleLogin,
  linkedinLogin,
  facebookLogin,
} from '../../actions/index.js';
import { userSignUp } from '../../actions/index.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { style } from './style.js';

function SignUp(props) {
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
    if (email === '' || password === '') {
      return;
    }
    if (password !== confirmPassword) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      userSignUp({ email, password }, dispatch, (err, data) => {
        if (data) {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          props.history.push('/dashboard');
        }
        if (err) {
          console.log(err);
        }
      });
    }
  };

  const responseGoogle = (response) => {
    const { accessToken } = response;
    googleLogin({ accessToken }, dispatch, (err, data) => {
      if (data) {
        props.history.push('/dashboard');
      }
      if (err) {
        console.log(err);
      }
    });
  };

  const responseFacebook = (response) => {
    const { accessToken } = response;
    console.log('accessToken', accessToken);
    facebookLogin({ accessToken }, dispatch, (err, data) => {
      if (data) {
        props.history.push('/dashboard');
      }
      if (err) {
        console.log(err);
      }
    });
  };

  const responseLinkedin = (response) => {
    console.log(response);
  };

  return (
    <div className={style({})}>
      <img
        className="passport-image"
        src={ASSETS_BASE_URL + '/images/Signup/passport-image.jpeg'}
        alt="passport-image"
      />
      <div className="container">
        <img
          className="logo"
          src={ASSETS_BASE_URL + '/images/Login/keel-logo.svg'}
          alt="keel-logo"
        />
        <p className="header-text">Sign Up to Continue</p>
        <form className="form-wrapper" onSubmit={signUpSubmitHnadler}>
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
        <div className="social-button-wrapper">
          <GoogleLogin
            clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="google-button">
                <img
                  className="google-button-image"
                  src={ASSETS_BASE_URL + '/images/Signup/google-logo.jpeg'}
                  alt="google"
                />
              </button>
            )}
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
        </div>
        <p className="signup-divider">
          <span>If you're already a member!</span>
        </p>
        <Link className="signup-button-wrapper" to="/">
          <button className="sign-up-button">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
