import React, { useRef, useState } from "react";
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import { container } from "./style.js";
import ProfileDropdown from "./ProfileDropdown.js";

const ProfileWidget = () => {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();

  return (
    <div
      className={container}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      ref={modalRef}
    >
      <img></img>
      {
      isClicked && 
      <DetectClickOutside targetRef={modalRef} clickOutside={()=>setIsClicked(false)}>
        <ProfileDropdown />
      </DetectClickOutside>
      }
    </div>
  );
};

export default ProfileWidget;
