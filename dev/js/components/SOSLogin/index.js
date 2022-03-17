import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { userLoginWithEmail } from '@actions';
import LoadingWidget from '@components/LoadingWidget';
import { loader } from './style.js';

const queryString = require('query-string');

const SOSLogin = (props)=>{
    const parsed = queryString.parse(props.location.search);
    let email='';
    if(parsed && parsed.email){
      email = parsed.email;
    }
    const [loginFail, setLoginFail] = useState(false);
    const dispatch = useDispatch();

    const loginAfterLoginSuccess = ()=>{
        setTimeout(() => {
          props.history.push('/');
        }, 2000);
    }

    useEffect(()=>{
      userLoginWithEmail({ email }, dispatch, (err, data) => {
        if (data) {
          loginAfterLoginSuccess()    
        }
        if (err) {
          setLoginFail(true);
        }
      });
    },[]);

    useEffect(()=>{
      if(loginFail){
        alert('Failed to login, Please contact Consultant')
      }
    },[loginFail])

    return(
        <div className={loader}>
          <LoadingWidget />
        </div>        
    )
}

export default SOSLogin;