import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import STORAGE from '@helpers/storage';

const CustomRoute = (props)=>{

    const { isSignin, isPrivate } = props;

    if(STORAGE.checkAuth()){
        if(isSignin){
            return <Redirect to="/"/>
        }
        return <Route {...props}/>
    }else if(isPrivate){
        return <Redirect to="/"/>
    }
    return <Route {...props}/>
}

export default CustomRoute;