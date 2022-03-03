import React, { useEffect, useState, Fragment, useMemo } from 'react';
import { useDispatch } from 'react-redux';


import { getQuestions, submitQuestions } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import {
    userLoginWithEmail
  } from '../../actions/index.js';
import { style, Loader } from './style.js';


const SOSLogin = (props)=>{
    let email = '';
    if(props && props.match && props.match.params.emailId){
        email = props.match.params.emailId;
    }
    const [showLoader, setLoader] = useState(true);
    const [loginFail, setLoginFail] = useState(false);


    const dispatch = useDispatch();

    const loginAfterLoginSuccess = ()=>{
        setTimeout(() => {
          props.history.push('/');
        }, 1000);
      }

    userLoginWithEmail({ email }, dispatch, (err, data) => {
        if (data) {
          setLoader(false);
          setLoginFail(false);    
          loginAfterLoginSuccess()    
        }
        if (err) {
          setLoader(false);
          setLoginFail(true);
        }
      });

    return(
        <Fragment>
        {showLoader && (
          <div className={Loader}>
            <LoadingWidget />
          </div>
        )}
        <p>Shivani premi</p>
        </Fragment>
        
    )
}

export default SOSLogin;