import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '@components/Header';
import { css } from '@emotion/css';
import { readNotification, toggleNotificationChat } from '@actions';
import { renderNotificationIcons } from '@helpers/utils';
import ComponentLoader from '@components/ComponentLoader';
import { isMobileView } from '@constants';

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

const NotificationView = () => {
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { notificationList = [], notificationLoading } = taskInfo;
    const history = useHistory();
    const dispatch = useDispatch();

    const clickHandler = (val)=>{
        const { category, id } = val;
        readNotification({id}, null, ()=>{
            if(category=='TASKS'){
                history.push('/tasks');
            }else if(category=='DOCUMENT'){
                history.push('/vault');
            }else if(category=='CHATS'){
                if(isMobileView()){
                    toggleNotificationChat({value: true}, dispatch);   
                }else{
                    history.push('/');
                }
            }else if(category=='HOME'){
                history.push('/');
            }
        })
    }

    return (
        <div className={body + '    ' + 'p-relative pt-5 dashTaskSchSection '}>
            <div className="mainView mainSectionTopSpace">
                <Header />
                <div className="pushPading">
                    <div className="pushNotification">
                        {
                            notificationLoading?
                            <Fragment>
                                <div className="notificationLoading"><ComponentLoader/></div>
                                <div className="notificationLoading"><ComponentLoader/></div>
                                <div className="notificationLoading"><ComponentLoader/></div>
                            </Fragment>
                            :null
                        }
                        {
                            notificationList.map((val) => {
                                const { id, seen, text, category } = val;
                                const icon = renderNotificationIcons(val);

                                return <div className={`pushCards ${seen ? 'clickedPush' : ''}`} key={id} onClick={() => clickHandler(val)}>
                                    <div className="icoContent">
                                        <div className="notifyIcon">
                                            <img className="img-fluid" src={icon} alt="video" />
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
        </div>
    )
}

export default NotificationView;