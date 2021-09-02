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

  const agentInfo = useSelector(state=>state.AGENT_STORE);
  const { agentProfile={} } = agentInfo;
  const { agent_profile={} } = agentProfile;
  const { full_name='' } = agent_profile;
  
  const { isAgent } = logginInfo||{};

  return (
    <div className={profile + " " + "profileDropDown"}>
      <div className={info + " " + "dropWhiteBox" }>
        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
        <h2 className="usrDrpName">{`${first_name} ${last_name} ${full_name}`}</h2>
        {/* <h3>shubh@getkeel.com</h3> */}
      </div>
      <div>
        <ul className={links + " " + "listDropItem"}>
          {
            isAgent?null
            :<Fragment>
              <li>
                <div>
                  <img src={ASSETS_BASE_URL + "/images/common/profileIcon.svg"} />
                  <span onClick={()=>history.push('/profile')}>Profile</span>
                </div>
              </li>
              {/* <li>
                <div>
                  <img src={ASSETS_BASE_URL + "/images/common/editIcon.svg"} />
                  <span onClick={()=>history.push('/profile')}>Edit Profile</span>
                </div>
              </li> */}
            </Fragment>
          }
          
          <li>
            <div onClick={handleLogout}>
              <img src={ASSETS_BASE_URL + "/images/common/logoutIcon.svg"} />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
