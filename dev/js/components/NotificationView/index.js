import React from 'react';
import Header from '@components/Header';
import { css } from '@emotion/css';

export const body = css`
    // background: rgba(252, 252, 252, 0.5);
    display: flex;
    width: 100%;
    .mainView{
        width: 100%;
        background: #f3f2ef;
        margin-top:8px;
    }
    .headerView{
        display: flex;
        align-items: center;
    }
`

const NotificationView = ()=>{

    return(
        <div className={body + '    ' + 'p-relative pt-5 dashTaskSchSection '}>
            <div className="mainView mainSectionTopSpace">
                <Header />
                <div className="pushNotification">
                    <div className="pushCards">
                        <div className="icoContent">
                            <div className="notifyIcon">
                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
                            </div>
                            <div className="pushContent">
                                <h2>New Meeting: Your meeting is starting in 5 minutes</h2>
                                <p>5 mins ago</p>
                            </div>
                        </div>
                        <button className="pushNotifyBtn">Join Meeting</button>
                    </div>
                    <div className="pushCards clickedPush">
                        <div className="icoContent">
                            <div className="notifyIcon">
                                <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
                            </div>
                            <div className="pushContent">
                                <h2>New Meeting: Your meeting is starting in 5 minutes</h2>
                                <p>5 mins ago</p>
                            </div>
                        </div>
                        <button className="pushNotifyBtn">Join Meeting</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationView;