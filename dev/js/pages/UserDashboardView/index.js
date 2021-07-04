import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UserDashboard from '@components/demoelem.js';

const UserDashboardView = ()=>{
    const counter = useSelector((state)=>state.AUTH.counter);
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch({type: 'TEST_DEMO'});
    }

    return(
        <div>
            <div className="container">
                <span>Welcome to Dashboard</span>
            </div>
            <button onClick={handleClick}>Total User</button>
            <span>{counter}</span>
            <UserDashboard />
        </div>
    )
}

export default UserDashboardView;