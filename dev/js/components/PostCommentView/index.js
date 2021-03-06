import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '@actions';
import CustomButton from '@components/CustomButton';
import { getNameInitialHelper } from '@helpers/utils';
import { container } from './style.js';

const PostComments = ({ taskId, updateTaskStatus, title = "" }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const addComment = () => {
        if (!comment) {
            updateTaskStatus(null, true, 'Please add some comments');
            return;
        }
        const dataParams = {
            msg: comment,
            task: taskId
        }
        createComment(dataParams, dispatch, (resp, err) => {
            setComment('');
            if (resp) {
                updateTaskStatus(true, null);
            } else {
                updateTaskStatus(null, true);
            }
        })
    }

    return (
        <div className={container + " " + "postCommentSection"}>
            <div className="msgView">
                <span className="profile">{getNameInitialHelper(title)}</span>
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