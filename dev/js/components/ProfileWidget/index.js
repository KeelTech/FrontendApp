import React, { useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DetectClickOutside from '@helpers/DetectClickOutside.js'
import STORAGE from '@helpers/storage';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import { logoutUser } from '@actions';
import { container } from "./style.js";
import ProfileDropdown from "./ProfileDropdown.js";

const ProfileWidget = () => {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLoader, setLoader] = useState(false);

  const handleLogout = () => {
    setLoader(true);
    logoutUser({}, () => { }, (res, error) => {
      STORAGE.deleteAuth().then((resp) => {
        dispatch({
          type: 'RESET_USER_INFO',
        })
        dispatch({
          type: 'RESET_AGENT_PROFILE',
        })
        dispatch({
          type: 'RESET_LOGIN_DATA',
        })
        setTimeout(() => {
          setLoader(false);
          history.push('/');
        }, 2000)
      })
    });
  }

  return (
    <div className="commonProfWidget">
      <div className="getHelp">
        <button>Get Help</button>
      </div>
      <div
        className={container}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        ref={modalRef}
      >
        {showLoader && <div className={loaderView}><LoadingWidget /></div>}

        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/user.svg"} />
        {
          isClicked &&
          <DetectClickOutside targetRef={modalRef} clickOutside={() => setIsClicked(false)}>
            <ProfileDropdown handleLogout={handleLogout} />
          </DetectClickOutside>
        }
      </div>
    </div>
  );
};

export default ProfileWidget;
