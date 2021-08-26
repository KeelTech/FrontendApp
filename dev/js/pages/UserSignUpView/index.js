import React, { useState, Fragment } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { LinkedIn as LinkedInLogin } from 'react-linkedin-login-oauth2';
import { googleLogin, facebookLogin } from '../../actions/index.js';
import { userSignUp } from '../../actions/index.js';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { style, Loader } from './style.js';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showLoader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const emailSignUpHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordSignUpHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const logoClick = () => {
    props.history.push('/');
  };

  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      return;
    }
    if (password !== confirmPassword) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      setLoader(true);
      userSignUp({ email, password }, dispatch, (err, data) => {
        if (data) {
          setErrorMessage(false);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          
          setTimeout(()=>{
            setLoader(false);
            window.location.href = 'https://app.getkeel.com/';
          },1000);
         
        }
        if (err) {
          setErrorMessage(true);
          setLoader(false);
        }
      });
    }
  };

  const responseGoogle = (response) => {
    const { accessToken } = response;
    setLoader(true);
    googleLogin({ accessToken }, dispatch, (err, data) => {
      if (data) {
        setLoader(false);
        props.history.push('/dashboard');
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
        props.history.push('/dashboard');
      }
      if (err) {
        setLoader(false);
        console.log(err);
      }
    });
  };

  // const responseLinkedin = (response) => {
  //   console.log(response);
  // };

  return (
    <Fragment>
      {showLoader && (
        <div className={Loader}>
          <LoadingWidget />
        </div>
      )}
      <div className={'loginMainContainer' + ' ' + style({})}>
        <div className="row no-gutters fullHeight">
          <div className="col-md-6 col-12 mobileHide">
            <div className="loginRightImg">
              <img
                className=" img-fluid"
                src={ASSETS_BASE_URL + '/images/Login/login_high_res.png'}
                alt="pasport-image"
              />
              <h4>Want to immigrate to<br /> Canada?</h4>
              <p>All in one immigration Platform</p>
            </div>

          </div>
          <div className="col-md-6 col-12">
            <div className="loginContainer">
              <div className="loginContent">
                <div className="loginLogo">
                  <img
                    className="keel-logo img-fluid"
                    src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
                    alt="keel-logo"
                    onClick={() => logoClick()}
                  />
                </div>
                <h3 className="header-text">Sign Up to Continue</h3>
                <form className="form-wrapper" onSubmit={signUpSubmitHandler}>
                  <div className="formCont">
                    <label>Email</label>
                    <input
                      // placeholder="E-mail / username"
                      type="email"
                      value={email}
                      onChange={emailSignUpHandler}
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="formCont">
                    <label>Password</label>
                    <input
                      className="password-field"
                      // placeholder="Password"
                      type="password"
                      value={password}
                      onChange={passwordSignUpHandler}
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="formCont">
                    <label>Confirm Password</label>
                    <input
                      className="confirm-password-field"
                      // placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={confirmPasswordHandler}
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="loginBtnCont">
                    <button className="log-in-button">Sign Up</button>
                  </div>
                </form>
                
                {passwordValidation && (
                  <p className="password-validation">Passwords do not match</p>
                )}
                {errorMessage && (
                  <p className="password-validation">E-mail already exists</p>
                )}
                <div className="signUp">
                  <p className="signup-divider">
                    <span>If you're already a member! <Link className="signup-button-wrapper" to="/">
                    Log In
                  </Link></span>
                  </p>
                </div>
                <p className="login-divider">
                  <span>Or Login with </span>
                </p>
                <div className="social-button-wrapper">

                  <FacebookLogin
                    appId="1088597931155576"
                    fields="name,email,picture"
                    textButton=""
                    callback={responseFacebook}
                    cssClass="facebook-button"
                    icon="fa-facebook"
                  />
                  <GoogleLogin
                    clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    render={(renderProps) => (
                      <button onClick={renderProps.onClick} className="google-button">
                        <img
                          className="google-button-image"
                          src={ASSETS_BASE_URL + '/images/common/google.svg'}
                          alt="google"
                        />
                      </button>
                    )}
                  />
                  {/* <button className="linkedin-button">
                    <img
                      className="google-button-image img-fluid"
                      src={ASSETS_BASE_URL + '/images/common/linked.svg'}
                      alt="google-image"
                    />
                  </button> */}
                  {/* <button onClick={responseLinkedin} className="linkedin-button">in</button> */}

                </div>
                
              </div>
            </div>
          </div>

        </div>

        {/* <div className="container">

          <p className="header-text">Sign Up to Continue</p>
          <form className="form-wrapper" onSubmit={signUpSubmitHandler}>
            <input
              placeholder="E-mail / username"
              type="email"
              value={email}
              onChange={emailSignUpHandler}
              autoComplete="off"
            />
            <input
              className="password-field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={passwordSignUpHandler}
              autoComplete="off"
            />
            <input
              className="confirm-password-field"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              autoComplete="off"
            />
            <button className="log-in-button">Sign Up</button>
          </form>
          {passwordValidation && (
            <p className="password-validation">Passwords do not match</p>
          )}
          {errorMessage && (
            <p className="password-validation">E-mail already exists</p>
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
        </div> */}
      </div>
    </Fragment >
  );
}

export default SignUp;
