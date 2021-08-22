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
      <div className={'loginMainContainer' + ' ' + style({})}>
        <div className="row no-gutters fullHeight">
          <div className="col-md-6 col-12">
            <div className="loginContainer">
              <div className="loginContent">
                <div className="loginLogo">
                  <img
                    className="keel-logo img-fluid"
                    src={ASSETS_BASE_URL + '/images/common/keelIcon.svg'}
                    alt="keel-logo"
                    onClick={() => loginClick()}
                  />
                </div>
                <h3 className="header-text">Log In</h3>
                <p className="logSubHead">Start your journey & get free consulting</p>
                <form className="form-wrapper" onSubmit={loginSubmitHnadler}>
                  <div className="formCont">
                    <label>Email</label>
                    <input
                      className="login-email-input"
                      placeholder="E-mail"
                      type="email"
                      value={email}
                      onChange={emailLoginHnadler}
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="formCont">
                    <label>Password</label>
                    <input
                      className="login-password-input"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={passwordLoginHandler}
                      autoComplete="new-password"
                    />
                  </div>
                  {loginFail && (
                    <p className="login-fail-msg">
                      Invalid credentials, Please try Again!
                    </p>
                  )}
                  {
                    isAgent?null
                    :<div className="formCheckForgt">
                      <div className="checkBoxContMain">
                        <label class="checkBoxCont"><p>Remember Me</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span></label>
                      </div>
                      <Link to="/confirm-email" className="password-reset-wrapper">
                        <button className="password-reset">Forgot your password?</button>
                      </Link>
                    </div>
                  }
                  <div className="loginBtnCont">
                    <button className="log-in-button">Log in</button>
                  </div>
                </form>
                {
                  isAgent?null
                  :<Fragment>
                    <div className="signUp">
                      <p className="signup-divider">
                        <span>Not registered yet? <Link className="signup-button-wrapper" to="/signup">
                          Create an Account
                        </Link></span>
                      </p>
                    </div>
                    <p className="login-divider">
                      <span>Or Login with </span>
                    </p>
                    <div className="social-button-wrapper">
                      
                      <FacebookLogin
                        appId="966069997563073"
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
                              className="google-button-image img-fluid"
                              src={ASSETS_BASE_URL + '/images/common/google.svg'}
                              alt="google-image"
                            />
                          </button>
                        )}
                      />
                      <button className="linkedin-button">
                        <img
                          className="google-button-image img-fluid"
                          src={ASSETS_BASE_URL + '/images/common/linked.svg'}
                          alt="google-image"
                        />
                      </button>
                      {/* <button onClick={responseLinkedin} className="linkedin-button">in</button> */}

                    </div>
                  </Fragment>
                }
                
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mobileHide">
            <div className="loginRightImg">
            <img
              className=" img-fluid"
              src={ASSETS_BASE_URL + '/images/Login/login_high_res.png'}
              alt="pasport-image"
            />
            <h4>Want to immigrate to<br/> Canada?</h4>
            <p>All in one immigration Platform</p>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginView;
