import React, { Fragment } from "react";
import { getFormattedTime, getFormattedDate, renderStatusText, renderActionItem } from '@helpers/utils';
import { headerClass, headerRowClass, tableClass, rowClass, view, hrClass, rowItemClass, rowItemClassEmpty, actionItemColor } from './style.js';
  const DesktopViewList = ({ handleCustomerClick, caseList }) => {
  return (
   
    <Fragment>
    <div className={view + +"mainView mainSectionTopSpace"}>
      {
        <table className= {tableClass + " " + "tableMain tableUpdated" }>
        <thead className= {headerClass + " " + "tableHeadMain"}>
        <tr className={headerRowClass + " " + "tableRow"} >
          <th className={hrClass + " " + "tableHead"}>Case ID</th>
          <th className={hrClass + " " + "tableHead"}>Name</th>
          <th className={hrClass + " " + "tableHead"}>Case Type</th>
          <th className={hrClass + " " + "tableHead"}>Start Date</th>
          <th className={hrClass + " " + "tableHead"}>Last Update</th>
          <th className={hrClass + " " + "tableHead"}>Action Items</th>
        </tr>
        </thead>
        <tbody>
        {caseList.map((list) => {
           const { case_id, plan, created_at, updated_at, display_id, user_details={}, action_items } = list;
           const { user_name ='' } = user_details;
           const colorFormat = renderActionItem(action_items);
          return (
            <tr className={`${rowClass + " " + "tableRow" } cursor-pointer`} key={case_id} onClick={() => handleCustomerClick(case_id)}>
              <td className={rowItemClass}>{display_id}</td>
              <td className={rowItemClass}>{user_name}</td>
              <td className={rowItemClass}>{plan && plan.name||''}</td>
              {<td className={rowItemClass}>{`${getFormattedDate(created_at).formattedDate} ${getFormattedTime(created_at)}`}</td>}
              {<td className={rowItemClass}>{`${getFormattedDate(updated_at).formattedDate} ${getFormattedTime(updated_at)}`}</td>}
              <td className={rowItemClass}><span className={actionItemColor({colorFormat})}>{action_items}</span></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      }
      </div>
    </Fragment>
    
  );
};

export default DesktopViewList;