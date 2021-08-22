import React, { Fragment, useState } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { profile, info, links } from "./style";

const ProfileDropdown = ({ handleLogout }) => {

  const history = useHistory();
  const taskInfo = useSelector(state => state.TASK_INFO);
  const logginInfo = useSelector(state => state.LOGIN);
  const { userInfo = {} } = taskInfo;
  const { profile:profileData={} } = userInfo;
  const { first_name='', last_name='' } = profileData;
  
  const { isAgent } = logginInfo||{};

  return (
    <div className={profile}>
      <div className={info}>
        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
        <h2>{`${first_name} ${last_name}`}</h2>
        {/* <h3>shubh@getkeel.com</h3> */}
      </div>
      <div>
        <ul className={links}>
          {
            isAgent?null
            :<Fragment>
              <li>
                <div>
                  <img src={ASSETS_BASE_URL + "/images/common/profileIcon.svg"} />
                  <span onClick={()=>history.push('/profile')}>Profile</span>
                </div>
              </li>
              <li>
                <div>
                  <img src={ASSETS_BASE_URL + "/images/common/editIcon.svg"} />
                  <span onClick={()=>history.push('/profile?isEdit=true')}>Edit Profile</span>
                </div>
              </li>
            </Fragment>
          }
          
          <li>
            <div onClick={handleLogout}>
              <img src={ASSETS_BASE_URL + "/images/common/logoutIcon.svg"} />
              <span onClick={handleLogout}>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
