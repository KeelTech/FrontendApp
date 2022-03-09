import React, { Fragment } from "react";

  const DesktopViewList = ({ handleCustomerClick, caseList }) => {
  return (
    <Fragment>
      {
        <table>
        <thead>
        <tr>
          <th>Case ID</th>
          <th>Name</th>
          <th>Case Type</th>
          <th>Last Update</th>
          <th>Start Date</th>
          <th>Action Items</th>
        </tr>
        </thead>
        <tbody>
        {caseList.map((list) => {
           const { case_id, plan, created_at, updated_at, display_id, user_details={}, action_items } = list;
           const { user_name ='' } = user_details;
          return (
            <tr key={case_id} onClick={() => handleCustomerClick(case_id)}>
              <td>{display_id}</td>
              <td>{user_name}</td>
              <td>{plan && plan.name||''}</td>
              {/* <td>{`${getFormattedDate(updated_at).formattedDate} ${getFormattedTime(updated_at)}`}</td> */}
              <td>{(new Date(updated_at)).toLocaleString()}</td>
              <td>{(new Date(created_at)).toLocaleString()}</td>
              {/* <td>{`${getFormattedDate(created_at).formattedDate} ${getFormattedTime(created_at)}`}</td> */}
              <td>{action_items}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      }
    </Fragment>
  );
};

export default DesktopViewList;