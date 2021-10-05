import React, { useRef, useState, useEffect } from "react";
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
  const [landbotInstance, setBotInstance] = useState('');

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

  useEffect(()=>{
    var myLandbotpop = new Landbot.Popup({
      configUrl: 'https://chats.landbot.io/v3/H-973102-9X9CDMX47L0KP823/index.json'
    });
    setBotInstance(myLandbotpop);
    // const chatbotWidget = document.getElementsByClassName('is-contain');
    // if(chatbotWidget && chatbotWidget.length) {
    //   chatbotWidget.style.display ="none";
    // }else{
    //   var observer = new MutationObserver(function(mutations) {
    //     const elem = document.getElementsByClassName('is-contain');
    //     console.log(elem);
    //     if (elem && elem[0]) {
    //       elem[0].style.display ="none";
    //       observer.unobserve(elem);
    //     }
    //  });
     
    //  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
    // }   

  },[])

  const handleHelpClick = ()=>{
    if(landbotInstance){
      landbotInstance.open();
    }
  }

  return (
    <div className="commonProfWidget">
      <div className="getHelp" onClick={handleHelpClick}>
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
