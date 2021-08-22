import React, { Fragment } from "react";
import Table from "@components/Table";

const DesktopViewList = ({ handleCustomerClick, caseList }) => {
  const columnList = [
    { key: 'case_id', label: 'Case ID' },
    { key: 'user', label: 'Name' },
    { key: 'plan', label: 'Case Type' },
    { key: 'created_at', label: 'Start Date', isDate: true },
    { key: 'updated_at', label: 'Last Update', isDate: true },
    { key: 'status', label: 'Task Status', CustomView: 'TaskStatusRow' }
  ]
  return (
    <Fragment>
      <Table data={caseList} cols={columnList} handleCustomerClick={handleCustomerClick}>
        {/* <template id="is_active">
          <button className={greenBtnClass}>Pending on you</button>
        </template> */}
      </Table>
    </Fragment>
  );
};

export default DesktopViewList;