import React, { Fragment } from "react";
import { getFormattedTime, getFormattedDate, renderStatusText } from '@helpers/utils';
import { lists, customer } from "./style.js";

const MobileViewList = ({ handleCustomerClick, caseList }) => {
  return (
    <Fragment>
      {caseList.map((list) => {
        const { case_id, user, plan, created_at, updated_at, status } = list;
        return (
          <ul key={case_id} className={lists} onClick={() => handleCustomerClick(case_id)}>
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
              <h2 className='value'>{`${getFormattedDate(created_at).formattedDate} ${getFormattedTime(created_at)}`}</h2>
            </li>
            <li className={customer}>
              <h2 className='key'>Task Status:</h2>
              <h2 className='value status'>{renderStatusText(status)}</h2>
            </li>
          </ul>
        )

      })}
    </Fragment>
  );
};

export default MobileViewList;