import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '@actions';
import CustomButton from '@components/CustomButton';
import { getNameInitialHelper } from '@helpers/utils';
import { postComment } from './style.js';

const PostComments = ({ addComments, title = "" }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const addComment = () => {

        // if (!comment) {
        //     updateTaskStatus(null, true, 'Please add some comments');
        //     return;
        // }
        // const dataParams = {
        //     msg: comment,
        //     task: taskId
        // }
        // createComment(dataParams, dispatch, (resp, err) => {
        //     setComment('');
        //     if (resp) {
        //         updateTaskStatus(true, null);
        //     } else {
        //         updateTaskStatus(null, true);
        //     }
        // })
        addComments(comment);
    }

    return (
        <div className={postComment + " " + "postCommentSection"}>
            <div className="msgView">
                <input type="text" placeholder="Write a Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className="postCommentCancel">
                <CustomButton text="Add" clickHandler={addComment}  />
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default PostComments;