import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createComment } from '@actions';
import CustomButton from '@components/CustomButton';
import { container } from './style.js';

const PostComments = ({ taskId, updateTaskStatus })=>{
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const addComment = ()=>{
        if(!comment){
            updateTaskStatus(null, true, 'Please add some comments');
            return;
        }
        const dataParams = {
            msg: comment,
            task: taskId
        }
        createComment(dataParams, dispatch, (resp, err)=>{
            setComment('');
            if(resp){
                updateTaskStatus(true, null);
            }else{
                updateTaskStatus(null, true);
            }
        })
    }

    return(
        <div className={container}>
            <div className="msgView">
                <span className="profile">SW</span>
                <input type="text" placeholder="Write a Comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            </div>
            <CustomButton text="Add" clickHandler={addComment} margin="0px 0px 16px 30px" padding="10px 20px" borderRadius="5px" backgroundColor="#747BB4"/>
        </div>
    )
}

export default PostComments;