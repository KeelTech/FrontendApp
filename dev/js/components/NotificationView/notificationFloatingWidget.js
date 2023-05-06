import React, { Fragment, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { CURRENT_VISIBLE_NOTIFICATION } from '@constants/types';
import { getNotification, readNotification, toggleNotificationChat } from '@actions';
import { renderNotificationIcons } from '@helpers/utils';
import { isMobileView } from '@constants';

const NotificationFloatingWidget = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const timeInterval = useRef();
    let notificationId = useRef();

    const taskInfo = useSelector(state => state.TASK_INFO);
    const { lastVisibleNotification } = taskInfo;

    const closeClicked = (e, val) => {
        e.stopPropagation();
        if (notificationId.current) {
            store.removeNotification(notificationId.current);
            notificationId.current = null;
        }
        clickHandler(val, false)
    }

    const getMessage = (msg)=>{
        if(typeof msg ==="string"){
            return msg;
        }
        return msg.title||''
    }

    useEffect(() => {
        timeInterval.current = setInterval(() => {
            getNotification({ recent: true }, dispatch, (val) => {
                if (val && val.id && lastVisibleNotification!=val.id) {
                    dispatch({
                        type: CURRENT_VISIBLE_NOTIFICATION,
                        payload: val.id
                    })
                    const icon = renderNotificationIcons(val);
                    try {
                        const { text } = val;
                        if (notificationId.current) {
                            store.removeNotification(notificationId.current);
                            notificationId.current = null;
                        }
                        if (text) {
                            let newId = store.addNotification({
                                content: () => {
                                    return (
                                        // <div className="pushNotification floatingNorificationCont">
                                        //     <img src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} className="cross" onClick={closeClicked}/>
                                        //     <div className={`pushCards clickedPush floatingWidget`} onClick={()=>clickHandler(val)}>
                                        //         <div className="icoContent">
                                        //             <div className="notifyIcon">
                                        //             <img className="img-fluid" src={icon} alt="video" />
                                        //             </div>
                                        //             <div className="pushContent">
                                        //             <h2>{text}</h2>
                                        //             {/* <p>5 mins ago</p> */}
                                        //             </div>
                                        //         </div>
                                        //         {/* <button className="pushNotifyBtn">Join Meeting</button> */}
                                        //     </div>
                                        // </div>
                                        <ul className="popOverNotifiy">
                                            <img src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} className="crossNoti" onClick={(e)=>closeClicked(e, val)}/>
                                            <li onClick={()=>clickHandler(val)}>{getMessage(text)}</li>
                                        </ul>
                                    )
                                },
                                type: "success",
                                insert: "top",
                                container: "top-right",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                click: false,
                                type: 'info'
                            });
                            notificationId.current = newId;
                        }
                    } catch (e) {
                        console.error('error is', e);
                    }
                }
            });
        }, 5000)


        return () => {
            clearInterval(timeInterval.current)
        }
    }, [lastVisibleNotification])

    const clickHandler = (val, isRedirect=true) => {
        const { category, id } = val;
        readNotification({ id }, null, () => {
            if(isRedirect){
                if (category == 'TASKS') {
                    history.push('/tasks');
                } else if (category == 'DOCUMENT') {
                    history.push('/vault');
                } else if (category == 'CHATS') {
                    if (isMobileView()) {
                        toggleNotificationChat({ value: true }, dispatch);
                    } else {
                        history.push('/');
                    }
                } else if (category == 'HOME') {
                    history.push('/');
                }
            }
        })
    }

    return (
        <Fragment>
            <ReactNotification />
        </Fragment>
    )
}

export default NotificationFloatingWidget