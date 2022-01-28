import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getTemplateListDetail } from '@actions';
import { isMobileView, loaderView } from '@constants';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import TaskCard from '@components/TaskCard'
import TemplateDetail from './TemplateDetail.js';
import { mainCont, container, tasksView, body } from './style.js';

const TemplateView = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const agentInfo = useSelector(state => state.AGENT_STORE);
    const { templateList, templateListLoading} = agentInfo;
    const [activeTask, setActiveTask] = useState(null);
    const[addNewTask, setNewTask] = useState(false);

    const fetchList = ()=>{
        const dataParams = {}
        getTemplateListDetail(dataParams, dispatch, (resp, error)=>{
            if(resp && resp.length){
                setActiveTask(resp[0]);
            }
        });
    }

    useEffect(()=>{
        fetchList();
    },[])

    const taskClickHandler = (val)=>{
        if(isMobileView()){
            history.push(`/agent/template/${val.id}`);
        }else{
            setActiveTask(val)
            setNewTask(false);
        }
    }

    const addNewTemplate = ()=>{
        if(isMobileView()){
            history.push(`/agent/template/task`);
        }else{
            setNewTask(true);
            setActiveTask(null);
        }
    }

    const refetchList = (isNew=false)=>{
        if(isNew){
            setNewTask(false);
        }
        fetchList();
    }

    const handleBackBtnClick = () => {
        setNewTask(false);
        setActiveTask(templateList[0]);
       // history.push(`/agent/tasks/${case_id}`);
    }

    return(
        <div className={`${body} ${mainCont}` + '    ' + 'taskViewMainContainer p-relative pt-5'}>
        <div className="mainView mainSectionTopSpace">
            <div className={container + '    ' +"taskHandlersCnt"}>
                <div className={tasksView}>
                    {/* =========== Custom Add Task Button =========== */}
                    {/* <div className="addNewTask" onClick={addNewTemplate}>
                        <button >Add New Template</button>
                    </div> */}
                    {/* =========== Custom Add Task Button =========== */}
                    {
                        templateListLoading && templateList.length==0? <div className={loaderView + '    ' + "CstmLoaderView"}><LoadingWidget /></div>
                            : <div className="taskList agentTaskList">
                                {
                                    templateList.length ?
                                    templateList.map((val) => {
                                            const { id } = val;
                                            return (<TaskCard key={id} isView showStatus={false} active={activeTask && activeTask.id === id} clickHandler={() => taskClickHandler(val)} data={val} />)
                                        })
                                        : <div className="emptyData"><BlankScreen message="You have no Templates" /></div>
                                }
                            </div>
                    }
                </div>
                <div className="taskInfo taskUi">
                    {
                       activeTask||addNewTask ? <TemplateDetail activeTask={activeTask} addNewTask={addNewTask} refetchList={refetchList} handleBackBtnClick={handleBackBtnClick}/> : null
                    }
                    {
                      //  showAddTaskView && <CreateTask toggleAddTaskView={toggleAddTaskView} caseId={caseId} />
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default TemplateView;