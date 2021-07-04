import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LinkedIn as LinkedInLogin } from 'react-linkedin-login-oauth2';
import { googleButtonStyle } from './style.js';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../actions/index.js';
import { Link } from 'react-router-dom';
import { style } from './style.js';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const loginState = useSelector(state => state.LOGIN);

  const dispatch = useDispatch();

  const emailLoginHnadler = (event) => {
    setEmail(event.target.value);
  };

  const passwordLoginHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginSubmitHnadler = (event) => {
    event.preventDefault();
    userLogin({ email, password }, dispatch, (err, data) => {
      if (data) {
        console.log('data', data);
      }
      if (err) {
        console.log(err);
      }
    });
    setEmail('');
    setPassword('');
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
      <div className="container">
        <img
          className="keel-logo"
          src={ASSETS_BASE_URL + '/images/login/keel-logo.svg'}
          alt="keel-logo"
        />
        <p className="header-text">Log in to Continue</p>
        <form onSubmit={loginSubmitHnadler}>
          <input
            placeholder="Your e-mail / username"
            type="email"
            value={email}
            onChange={emailLoginHnadler}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordLoginHandler}
          />
          <button className="log-in-button">Log in</button>
        </form>
        <p className="password-reset">Forgot your password? Click here!</p>
        <p className="login-divider">
          <span>Or Login with </span>
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
          <span>Or</span>
        </p>
        <Link to='/signup'>
          <button className="sign-up-button">Sign Up</button>
          </Link>
      </div>
      <img
        className="passport-image"
        src={ASSETS_BASE_URL + '/images/login/visa-image.jpeg'}
        alt="pasport-image"
      />
    </div>
  );
};

export default LoginView;
