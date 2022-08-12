import React, { useState } from 'react';
import PostCommentView from './PostComment';
import { messageSection } from './style';

const StageView = ()=>{
    const [sortedComments, setSortComment] = useState([]);
    const addComments = (newVal)=>{
        setSortComment((val)=>val.concat(newVal));
    }
    const deleteCommentClicked= (index)=>{
        const newComments = sortedComments.filter((x, key)=>key!==index);
        setSortComment(newComments);
    }
    return(
        <div className="messageSection">
            <PostCommentView addComments={addComments}/>
            {
                sortedComments && sortedComments.map((val, key) => {
                    return <div className={messageSection + '    ' + "msgView" }key={key}>
                        <div className="commentSection">
                            <div className="info">
                                {/* <span className="name">{capitalizeFirstLetter(user_details.user_name||agentName)}</span> */}
                                {/* <span className="time">{`${getFormattedTime(created_at)}, ${getFormattedDate(created_at).formattedDate}`}</span> */}
                            </div>
                            <div className="msgSection">
                                <div className="msg">{val}</div>
                                <img src={`${ASSETS_BASE_URL}/images/common/delete.svg`} className="deleteIcon" onClick={() => deleteCommentClicked(key)} />
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default StageView;