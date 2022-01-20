import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RichTextEditor from 'react-rte';

import FloatingChatWidget from '@components/FloatingChatWidget';
import ChatWidget from '@components/ChatWidget';
import Header from '@components/Header';
import LoadingWidget from "@components/LoadingWidget";
import { getCaseDetail, getProgramList, updateProgram, createNotes } from "@actions";
import CustomAnimatedDropdown from '@components/CustomAnimatedDropdown';
import EditorView from '@components/EditorView';
import InfoList from './InfoList';
import { body } from './style';

function CustomerInfoView(props) {
  const dispatch = useDispatch();
  const taskInfo = useSelector((store) => store.TASK_INFO);
  const { caseDetails, caseDetailLoading } = taskInfo || {};

  const agentInfo = useSelector(state => state.AGENT_STORE);
  const { agentProfile = {} } = agentInfo;
  const { agent_profile = {} } = agentProfile;
  const { id = '', agent = "" } = agent_profile;

  let caseId = '';
  let [throttlePause, setThrottle] = useState(false);
  if (props && props.match && props.match.params) {
    caseId = props.match.params.caseId;
  }
  const history = useHistory();

  const [programStateList, getProgramState] = useState([]);
  const [selectedProgam, setProgram] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  
  const [editorState, setEditorState] = useState(RichTextEditor.createValueFromString("<p></p>",'html')
    )

  const redirectToTask = () => {
    history.push(`/agent/tasks/${caseId}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const dataParams = { customerId: caseId };
    getCaseDetail(dataParams, dispatch);
    getProgramList({}, dispatch, (resp, err) => {
      getProgramState(resp);
    })
  }, [])

  const updateProgramStatus = () => {

    const postDataParams = {
      "program": selectedProgam,
      caseId
    }
    updateProgram(postDataParams, dispatch, (resp, err) => {
      if (err) {
        alert('Failed to update');
      }
    })
  }

  const selectProgramType = (type) => {
    setProgram(type);
  }

  const {
    case_details = {},
    user_details = {},
    user_qualifications = [],
    pending_task_count = '',
    agent_notes,
    in_review_task_count
  } = caseDetails;

  const { first_name, last_name } = user_details;
  const { display_id, plan, program } = case_details;

  useEffect(() => {
    if (program) {
      setProgram(program)
    }
  }, [program]);

  useEffect(()=>{
    if(agent_notes && agent_notes.length){
      setEditorState(RichTextEditor.createValueFromString(agent_notes[0].notes,'html'))
    }
  },[agent_notes])

  const redirectToDocument = () => {
    history.push(`/agent/documents/${caseId}`);
  }

  const filterProgramList = useMemo(() => {
    const filterData = {};
    programStateList.map((val) => {
      const { category } = val;
      if (filterData[category] && filterData[category].subCategory) {
        filterData[category].subCategory.push(val);
      } else {
        filterData[category] = {};
        filterData[category].name = category;
        filterData[category].subCategory = [val];
      }
    })
    return filterData;
  }, [programStateList])

  const saveNotes = ()=>{
    const postParams = 
      {
        title: 'Dummy',
        notes: editorState.toString('html')
      }
    createNotes({postParams, caseId});
  }

  const saveNotesOnChange = () => {
    if (throttlePause) return;
    setThrottle(true);
    setTimeout(() => {
      saveNotes(false);
      setThrottle(false);
    }, 3000);
  };

  const onChange = (value) => {
    setEditorState(value);
    saveNotesOnChange();
    //console.log(value.toString('html'))
  };

  return (
    <div className={body}>
      <div className="mainView mainSectionTopSpace">
        {/* <Header headerText="Customer Details" isAgent>
        </Header> */}
      </div>
      {caseDetailLoading ? (
        <div>
          <LoadingWidget />
        </div>
      ) : (
        <div className="main-container customerMainContainer agentPadding">
          <div className="leftBar">
            <div className="basicInfoADD customerDetails">
              <div className="infoWrapper">
                <img className="img-fluid userProfileXn" src={ASSETS_BASE_URL + "/images/common/Avatar_blue.svg"} alt="user" />
                <div className="userInfoHeaderWrapper">
                  <h3 className="userName">
                    {first_name} {last_name}
                  </h3>
                  <div className="flexWrapper">
                    <img
                      className="tagImg"
                      src={ASSETS_BASE_URL + "/images/common/tagIcon.svg"}
                      alt="list"
                    />
                    <p className="visaPackage">{plan && plan.name || ''}</p>
                  </div>
                  <div className="flexWrapper">
                    <img
                      className="listImg"
                      src={ASSETS_BASE_URL + "/images/common/list.svg"}
                      alt="list"
                    />
                    <p className="taskDetails">{in_review_task_count} Task Pending for review</p>
                  </div>
                </div>
              </div>
              <div className="buttonWrapper justify-content-between align-items-end ">
                {/* <div className="customSelects">
                  <label>Case Type:</label>
                  {
                    programStateList.length ?
                      <select name="CustomN" id="Drp" onChange={updateProgramStatus} value={selectedProgam}>
                        {
                          programStateList.map((state, key) => {
                            return <option value={state.choice} key={key}>{state.choice}</option>
                          })
                        }
                      </select>
                      : null
                  }
                </div> */}

                <div className="agntTaskBtns buttonWrapper">
                  <button className="taskButton" onClick={redirectToTask}>Tasks</button>
                  <button className="taskButton" onClick={redirectToDocument}>Documents</button>
                </div>
              </div>
              <div className="multiSelect">
                <div className="customSelects">
                  <label>Program Type:</label>
                  <CustomAnimatedDropdown options={filterProgramList} handleSelect={selectProgramType} selectedProgam={selectedProgam} />
                </div>
                <button className="taskButton" onClick={updateProgramStatus}>Save</button>

              </div>
            </div>
            {/* <div className="meetingInfoWrapperADD meetingNewAd">
              <div className="meetingInfoFlexWrapper">
                <div className="meetingTextWrapper">
                  <p className="meetingHeader">This title is for the meeting</p>
                  <div className="meetingDateWrapper">
                    <img
                      className="calendarImg"
                      src={ASSETS_BASE_URL + "/images/common/calendarIcon.svg"}
                      alt="calender"
                    />
                    <p className="meetingDate">8:30pm, 28th March, 2021</p>
                  </div>
                </div>
                <div className="meetingBtnWrapper">
                  <button className="joinBtn">Join Meeting</button>
                  <button className="scheduleBtn">Reschedule</button>
                </div>
              </div>
            </div> */}
            <div className="completeInfoWrapperADD userCompleteInfo">
              <div className='hisTabs'>
                <ul>
                  <li className={activeTab==1?"tabsAct":''} onClick={()=>setActiveTab(1)}>User Details</li>
                  <li className={activeTab==2?"tabsAct":''} onClick={()=>setActiveTab(2)}>Notes</li>
                </ul>
              </div>
              {
                activeTab==1?<InfoList info={caseDetails} />:<EditorView onChange={onChange} editorState={editorState} saveNotes={saveNotes}/>
              }
            </div>
          </div>
          <div className="chat">
            {caseId && agent ? <ChatWidget caseId={caseId} currentUserId={agent} chatHeaderName={first_name} /> : ""}
          </div>
        </div>
      )}
      {caseId && agent ? <FloatingChatWidget caseId={caseId} currentUserId={agent} chatHeaderName={first_name} /> : ""}
    </div>
  );
}

export default CustomerInfoView;
