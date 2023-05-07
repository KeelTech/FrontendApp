import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '@components/Header';
import { css } from '@emotion/css';
import { getNameInitialHelper } from '@helpers/utils';
import ComponentLoader from '@components/ComponentLoader';

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
const AgentNotificationMobileWidget = () => {
    const agentTaskInfo = useSelector(state=>state.AGENT_STORE);
      const { agentNotificationLoading, agentNotificationData } = agentTaskInfo;

    const history = useHistory();

    const clickHandler = (case_id)=>{
         history.push(`/agent/customer/${case_id}`);
    }

    return (
        <div className={body + '    ' + 'p-relative pt-5 dashTaskSchSection '}>
            <div className="mainView mainSectionTopSpace">
                {/* <Header /> */}
                <div className="pushPading">
                    <div className="pushNotification">
                        {
                            agentNotificationLoading && agentNotificationData && agentNotificationData.length==0?
                            <Fragment>
                                <div className="notificationLoading"><ComponentLoader/></div>
                                <div className="notificationLoading"><ComponentLoader/></div>
                                <div className="notificationLoading"><ComponentLoader/></div>
                            </Fragment>
                            :null
                        }
                        {
                            agentNotificationData.map((val, key)=>{
                                const { user_details, chat_details, case_id } = val;
                                const { user_name, email } = user_details;
                                const { new_message, message, sent_date, sent_by } = chat_details;
                                return <div key={key} className={`pushCards ${new_message?'':'clickedPush'}`} onClick={()=>clickHandler(case_id)}>
                                <div className="icoContent">
                                    <div className="notifyIcon">
                                    <p>{getNameInitialHelper(user_name)}</p>
                                    </div>
                                    <div className="pushContent">
                                    <h2>{user_name}</h2>
                                    <p numberOfLines={1}>{email!=sent_by?<strong className="sendRecvHead">You : </strong>:null } { message.length < 35? message: `${message.substring(0, 32)}...` }</p>  
                                    <p className="msgTime notifyTime">{(new Date(sent_date)).toLocaleString()}</p>
                                    </div>
                                </div>
                                </div>
                            })
                        }
                        {
                            agentNotificationData.length==0 && !agentNotificationLoading?
                            <p className="emptyNotification">No New Messages</p>
                            :null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentNotificationMobileWidget;