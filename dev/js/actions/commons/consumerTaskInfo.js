import { TASK_LIST_LOADING, SET_TASK_LIST, TASK_DETAIL_INFO } from '@constants/types';
import { API_POST, API_GET } from '../../api/api.js';
import STORAGE from '@helpers/storage/storage.js';

export const getTaskList = (dataParams, dispatch, cb=null)=>{
    const status = dataParams.status;
    dispatch({
        type: TASK_LIST_LOADING,
        payload: {
            status: true
        }
    })
    API_GET(`${API_BASE_URL}/v1/tasks/list?status=${status}`).then((response)=>{
        dispatch({
            type: TASK_LIST_LOADING,
            payload: {
                status: false
            }
        })
        dispatch({
            type: SET_TASK_LIST,
            payload: response && response.data||[]
        })
        if(cb)cb(response.data, null);
    }).catch((e)=>{
        dispatch({
            type: TASK_LIST_LOADING,
            payload: {
                status: false
            }
        })
    })
}

const newData  =  {
    "task_id": "Task_1234",
    "status_name": "Pending",
    "priority_name": "Medium",
    "created_at": "2021-07-05T23:21:15.571766+05:30",
    "title": "Do task 1",
    "description": "Checking",
    "due_date": null,
    "tasks_comment": [
        {
            "user": 1,
            "msg": "did this",
            "created_at": "2021-07-02T21:34:45.180747+05:30",
            "user_details": {
                "id": 1,
                "user_name": "udipto",
                "email": "udipto@getkeel.com"
            }
        }
    ],
    "tasks_docs": [
      {
        "id": 3,
        "doc_id": "doc_5ef04bee-bfb3-4232-9c86-541915353bf1",
        "user_id": 26,
        "doc_type": "Generic"
       }
   ],
    "check_list": {
        "Upload documents": false,
        "Verify DOcuments": true,
    },
    "tags": "Important",
    "case_id": "12"
}

export const getTaskDetail = (dataParams, dispatch, cb=null)=>{
    const { taskId } = dataParams;
    API_GET(`${API_BASE_URL}/v1/tasks/taskDetails/${taskId}`).then((response)=>{
        dispatch({
            type: TASK_DETAIL_INFO,
            payload: newData,
            taskId
        })
        if(cb)cb(data, null);
    }).catch((e)=>{
        
    })
}