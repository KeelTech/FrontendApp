import React, { useState, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LinkedIn as LinkedInLogin } from 'react-linkedin-login-oauth2';
import LoadingWidget from '@components/LoadingWidget';
import { useDispatch } from 'react-redux';
import {
  userLogin,
  googleLogin,
  linkedinLogin,
  facebookLogin,
  agentLogin
} from '../../actions/index.js';
import { Link } from 'react-router-dom';
import { style, Loader } from './style.js';

const LoginView = (props) => {
  const isAgent = props.match.path.includes('agent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);
  const [showLoader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const emailLoginHnadler = (event) => {
    setEmail(event.target.value);
  };

  const passwordLoginHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginClick = () => {
    props.history.push('/');
  };

  const loginAfterLoginSuccess = ()=>{
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }

  const loginSubmitHnadler = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      return;
    }
    setLoader(true);
    let loginFunc = userLogin;
    if(isAgent){
      loginFunc = agentLogin;
    }
    loginFunc({ email, password }, dispatch, (err, data) => {
      if (data) {
        setLoader(false);
        setLoginFail(false);
        setEmail('');
        setPassword('');
        loginAfterLoginSuccess();
      }
      if (err) {
        setLoader(false);
        setLoginFail(true);
      }
    });
  };

  const responseGoogle = (response) => {
    const { accessToken } = response;
    setLoader(true);
    googleLogin({ accessToken }, dispatch, (err, data) => {
      if (data) {
        setLoader(false);
        loginAfterLoginSuccess();
      }
      if (err) {
        setLoader(false);
        console.log(err);
      }
    });
  };

  const responseFacebook = (response) => {
    const { accessToken } = response;
    setLoader(true);
    facebookLogin({ accessToken }, dispatch, (err, data) => {
      if (data) {
        setLoader(false);
        loginAfterLoginSuccess();
      }
      if (err) {
        setLoader(false);
        console.log(err);
      }
    });
  };

  // Function for linkedin Login
  // const responseLinkedin = (response) => {
  //   axios
  //     .post('https://www.linkedin.com/oauth/v2/accessToken', {
  //       grant_type: 'client_credentials',
  //       client_id: '86o0duq76z6yqk',
  //       client_secret: 'OlFL5VXTWGY2ovwM',
  //     })
  //     .then((response) => console.log('link response', response))
  //     .catch((error) => console.log('link error', error));
  // };

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
            onClick={() => loginClick()}
          />
          <p className="header-text">Log in to Continue</p>
          <form className="form-wrapper" onSubmit={loginSubmitHnadler} autoComplete="false">
            <input
              className="login-email-input"
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={emailLoginHnadler}
              autoComplete="new-password"
            />
            <input
              className="login-password-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={passwordLoginHandler}
              autoComplete="new-password"
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
          {
            isAgent?null
            :<Fragment>
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

                {/* <button onClick={responseLinkedin} className="linkedin-button">
                in
              </button> */}
              </div>
            </Fragment>
          }
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
    </Fragment>
  );
};

export default LoginView;
