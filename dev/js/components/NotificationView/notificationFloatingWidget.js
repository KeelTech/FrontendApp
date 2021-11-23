import React, { Fragment, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { getNotification, readNotification } from '@actions';

const NotificationFloatingWidget = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const timeInterval = useRef();
    let notificationId = useRef();

    const closeClicked = (e)=>{
        e.stopPropagation();
        if(notificationId.current){
            store.removeNotification(notificationId.current);
            notificationId.current = null;
        }
    }

    useEffect(()=>{
        timeInterval.current = setInterval(()=>{
            getNotification({recent: true}, dispatch, (val)=>{
                if(val && val.id){
                    try{
                        const { text } = val;
                        if(notificationId.current){
                            store.removeNotification(notificationId.current);
                            notificationId.current = null;
                        }
                        if(text){
                            let newId = store.addNotification({
                                content: ()=>{
                                    return(
                                    <div className="pushNotification floatingNorificationCont">
                                        <img src={ASSETS_BASE_URL+"/images/common/crossIcon.svg"} className="cross" onClick={closeClicked}/>
                                        <div className={`pushCards clickedPush floatingWidget`} onClick={()=>clickHandler(val)}>
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
                                    </div>
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
                    }catch(e){
                        console.log('error is', e);
                    }
                }
            });
        },3000)
        

        return ()=>{
            clearInterval(timeInterval.current)
        }
    },[])

    const clickHandler = (val)=>{
        const { category, id } = val;
        readNotification({id}, null, ()=>{
            if(category=='TASKS'){
                history.push('/tasks');
            }else if(category=='DOCUMENT'){
                history.push('/vault');
            }else if(category=='CHATS'){
                history.push('/');
            }else if(category=='HOME'){
                history.push('/');
            }
        })
    }

    return(
        <Fragment>
            <ReactNotification />
        </Fragment> 
    )
}

export default NotificationFloatingWidget