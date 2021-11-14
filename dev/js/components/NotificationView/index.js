import React from 'react';
import { useSelector } from 'react-redux';
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
    const taskInfo = useSelector(state=>state.TASK_INFO);
    const { notificationList=[] } = taskInfo;

    return(
        <div className={body + '    ' + 'p-relative pt-5 dashTaskSchSection '}>
            <div className="mainView mainSectionTopSpace">
                <Header />
                <div className="pushNotification">
                {
                    notificationList.map((val)=>{
                    const { id, seen, text } = val;
                    return <div className={`pushCards ${seen?'':'clickedPush'}`} key={id}>
                    <div className="icoContent">
                        <div className="notifyIcon">
                        <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/video.svg"} alt="video" />
                        </div>
                        <div className="pushContent">
                        <h2>{text}</h2>
                        {/* <p>5 mins ago</p> */}
                        </div>
                    </div>
                    {/* <button className="pushNotifyBtn">Join Meeting</button> */}
                    </div>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default NotificationView;