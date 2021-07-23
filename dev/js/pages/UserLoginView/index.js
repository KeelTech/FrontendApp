import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { userLogin, googleLogin, facebookLogin } from '../../actions/index.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { style } from './style.js';

const LoginView = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);

  const dispatch = useDispatch();

  const emailLoginHnadler = (event) => {
    setEmail(event.target.value);
  };

  const passwordLoginHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginSubmitHnadler = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      return;
    }
    userLogin({ email, password }, dispatch, (err, data) => {
      if (data) {
        setLoginFail(false);
        setEmail('');
        setPassword('');
        props.history.push('/dashboard');
      }
      if (err) {
        setLoginFail(true);
      }
    });
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

  return (
    <div className={style({})}>
      <div className="container">
        <img
          className="keel-logo"
          src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
          alt="keel-logo"
        />
        <p className="header-text">Log in to Continue</p>
        <form className="form-wrapper" onSubmit={loginSubmitHnadler}>
          <input
            className="login-email-input"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={emailLoginHnadler}
            autocomplete="off"
          />
          <input
            className="login-password-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordLoginHandler}
            autocomplete="off"
          />
          {loginFail && (
            <p className="login-fail-msg">
              Invalid credentials, Please try Again!
            </p>
          )}
          <button className="log-in-button">Log in</button>
          <Link to="/confirm-email" className="password-reset-wrapper">
            <button className="password-reset">Forgot your password?</button>
          </Link>
        </form>
        <p className="login-divider">
          <span>Or Login with </span>
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
                  alt="google-image"
                />
              </button>
            )}
          />
          <FacebookLogin
            appId="966069997563073"
            fields="name,email,picture"
            textButton=""
            callback={responseFacebook}
            cssClass="facebook-button"
            icon="fa-facebook"
          />
        </div>
        <p className="signup-divider">
          <span>Or</span>
        </p>
        <Link className="signup-button-wrapper" to="/signup">
          <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>
      <img
        className="passport-image"
        src={ASSETS_BASE_URL + '/images/Login/visa-image.jpeg'}
        alt="pasport-image"
      />
    </div>
  );
};

export default LoginView;
