import React,{Fragment} from "react";
import { getFormattedTime, getFormattedDate } from '@helpers/utils';
import {lists, customer} from "./style.js";

const MobileViewList = ({ handleCustomerClick, caseList }) => {
  return (
    <Fragment>
      {caseList.map((list) => {
        const { case_id, user, plan, start_date, updated_at, is_active } = list;
        return(
          <ul key={case_id} className={lists} onClick={()=>handleCustomerClick(case_id)}>
            <li className={customer}>
              <h2 className='key'>Case Id:</h2>
              <h2 className='value'>{case_id}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Name:</h2>
              <h2 className='value'>{user}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Case Type:</h2>
              <h2 className='value'>{plan}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Last Update:</h2>
              <h2 className='value'>{`${getFormattedDate(updated_at).formattedDate} ${getFormattedTime(updated_at)}`}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Start Date:</h2>
              <h2 className='value'>{`${getFormattedDate(start_date).formattedDate} ${getFormattedTime(start_date)}`}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Task Status:</h2>
              <h2 className='value status'>{is_active?'Pending':'Completed'}</h2>
            </li>
          </ul>
        )
        
    })}
    </Fragment>
  );
};

export default MobileViewList;