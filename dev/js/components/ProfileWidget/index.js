import React, { useState } from "react";
import { container } from "./style.js";
import ProfileDropdown from "./ProfileDropdown.js";
const ProfileWidget = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={container}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <img></img>
      {isClicked && <ProfileDropdown />}
    </div>
  );
};

export default ProfileWidget;
