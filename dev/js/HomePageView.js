import React from 'react';
import STORAGE from '@helpers/storage';
import UserLoginView from './pages/UserLoginView';
import UserDashboardView from './pages/UserDashboardView';

const HomePageView = (props)=>{

    if(STORAGE.checkAuth()){
        return <UserDashboardView {...props}/>
    }

    return <UserLoginView {...props}/>
}

export default HomePageView;