import React from "react";
import { profile, info, links } from "./style";
const ProfileDropdown = () => {
  return (
    <div className={profile}>
      <div className={info}>
        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
        <h2>Shubh Wadekar</h2>
        <h3>shubh@getkeel.com</h3>
      </div>
      <div>
        <ul className={links}>
          <li>
            <div>
              <img src={ASSETS_BASE_URL + "/images/common/profileIcon.svg"} />
              <span>Profile</span>
            </div>
          </li>
          <li>
            <div>
              <img src={ASSETS_BASE_URL + "/images/common/editIcon.svg"} />
              <span>Edit Profile</span>
            </div>
          </li>
          <li>
            <div>
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
