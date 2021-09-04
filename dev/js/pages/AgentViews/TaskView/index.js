import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_AGENT_MENUBAR_STATE } from '@constants/types';
import TaskCard from '@components/TaskCard';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import AgentTaskDetail from '@pages/AgentTaskDetail';
import CustomButton from '@components/CustomButton';
import CreateTask from '@components/CreateTask';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import { isMobileView, loaderView } from '@constants';
import { getTaskList } from '@actions';
import { mainCont, container, tasksView } from './style.js';
import { body } from '../style.js';

const TaskView = (props) => {
    let caseId = '';
    if (props && props.match && props.match.params) {
        caseId = props.match.params.caseId;
    }

    const history = useHistory();
    const dispatch = useDispatch();
    const taskInfo = useSelector(state => state.TASK_INFO);
    const { taskList = [] } = taskInfo || {};
    const [activeWidget, setActiveWidget] = useState(0);
    const [activeTask, setActiveTask] = useState('');
    const [showAddTaskView, setAddTaskView] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCtaClick = (val) => {
        setActiveWidget(val);
        setActiveTask('');
    }

    const taskClickHandler = (taskId) => {
        if (isMobileView()) {
            history.push(`/agent/task/detail/${taskId}`);
        } else {
            setActiveTask(taskId);
            setAddTaskView(false);
        }
    }

    const refetchTaskList = () => {
        setLoading(true);
        getTaskList({ status: activeWidget, case: caseId }, dispatch, (resp, error) => {
            setLoading(false);
            if (resp && resp.length && !isMobileView()) {
                setActiveTask(resp[0].task_id);
            } else {
                setActiveTask('');
            }
        });
    }

    useEffect(() => {
        dispatch(
            {
                type: SET_AGENT_MENUBAR_STATE,
                payload: {
                    activeWidget: 'tasks'
                }
            }
        )
    }, [])

    useEffect(() => {
        refetchTaskList();
    }, [activeWidget])

    const addMoreTasks = () => {
        if (isMobileView()) {
            history.push(`/agent/task/create/${caseId}`);
        } else {
            setAddTaskView(true);
        }
    }

    const toggleAddTaskView = (isCreateNew = false) => {
        if (!isMobileView() && isCreateNew) {
            refetchTaskList();
        }
        setAddTaskView(val => !val);
    }

    return (
        <div className={`${body} ${mainCont}` + '    ' + 'taskViewMainContainer p-relative pt-5'}>
            <div className="mainView mainSectionTopSpace">
                <div className="subHeaderTop">
                    <div className="headerContent">
                        <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />
                        {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                        {/* <NotificationWidget /> */}
                        <ProfileWidget />
                    </div>
                </div>
                {/* <div className="addStaticBtn">
                            <button clickHandler={addMoreTasks}>Add New Task</button>
                        </div> */}
                <Header headerText="Task" isAgent>
                    <div className="headerView">
                        {/* <CustomButton text="Add New Task" clickHandler={addMoreTasks} margin="0px 16px 0px 0px" /> */}
                        <NotificationWidget />
                        {/* <ProfileWidget/> */}
                    </div>
                </Header>
                <div className={container + '    ' +"taskHandlersCnt"}>
                    <div className={tasksView}>
                        <div className="tasksCta">
                            <div className={`cta ${activeWidget === 0 ? 'ctaActive' : ''}`} onClick={() => handleCtaClick(0)}>
                                <span>Pending</span>
                            </div>
                            <div className={`cta ${activeWidget === 1 ? 'ctaActive' : ''}`} onClick={() => handleCtaClick(1)}>
                                <span>In Review</span>
                            </div>
                            <div className={`cta ${activeWidget === 2 ? 'ctaActive' : ''}`} onClick={() => handleCtaClick(2)}>
                                <span>Completed</span>
                            </div>
                        </div>
                        {/* =========== Custom Add Task Button =========== */}
                        <div className="addNewTask" onClick={addMoreTasks}>
                            <button>Add New Task</button>
                        </div>
                        {/* =========== Custom Add Task Button =========== */}
                        {
                            loading ? <div className={loaderView + '    ' + "CstmLoaderView"}><LoadingWidget /></div>
                                : <div className="taskList agentTaskList">
                                    {
                                        taskList.length ?
                                            taskList.map((val) => {
                                                const { task_id } = val;
                                                return (<TaskCard key={task_id} isView active={!showAddTaskView && activeTask === task_id} clickHandler={() => taskClickHandler(task_id)} data={val} />)
                                            })
                                            : <div className="emptyData"><BlankScreen message="You have no pending tasks" /></div>
                                    }
                                </div>
                        }
                    </div>
                    <div className="taskInfo taskUi">
                        {
                            !loading && !showAddTaskView && activeTask ? <AgentTaskDetail activeTask={activeTask} refetchTaskList={refetchTaskList} /> : null
                        }
                        {
                            showAddTaskView && <CreateTask toggleAddTaskView={toggleAddTaskView} caseId={caseId} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskView;