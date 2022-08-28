import React from 'react';
import PostCommentView from './PostComment';
import { postCaseComments } from "@actions";
import { messageSection } from './style';

const StageView = ({ caseId, fetchCommentList, listComments }) => {
    const addComments = (newVal) => {
        postCaseComments({ case: caseId, msg: newVal }, '', (resp, error) => {
            if (resp) {
                fetchCommentList();
            }
        });
    }
    const deleteCommentClicked = (index) => {
        // const newComments = sortedComments.filter((x, key)=>key!==index);
        // setSortComment(newComments);
    }
    return (
        <div className="messageSection">
            <div className="commentBoxScroll">
            {
                listComments && listComments.map((val, key) => {
                    return <div className={messageSection + '    ' + "msgView"} key={key}>
                        <div className="commentSection commentUiUpdated">
                            <div className="info">
                                <span className="name">User</span>
                                <span className="time">00:00</span>
                                {/* <span className="name">{capitalizeFirstLetter(user_details.user_name||agentName)}</span> */}
                                {/* <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at).formattedDate}`}</span> */}
                            </div>
                            <div className="msgSection">
                                <div className="msg">{val.msg || ''}</div>
                                <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={() => deleteCommentClicked(key)} />
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
            <PostCommentView addComments={addComments} />
        </div>
    )
}

export default StageView;