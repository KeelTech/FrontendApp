import React, { Fragment } from "react";
import { getFormattedTime, getFormattedDate } from '@helpers/utils';
import { greenBtnClass, redBtnClass } from "./style.js";
import Table from "@components/Table";

const DesktopViewList = ({ handleCustomerClick, caseList }) => {
  const columnList = [
    { key: 'case_id', label: 'Case ID' },
    { key: 'user', label: 'Name' },
    { key: 'plan', label: 'Case Type' },
    { key: 'start_date', label: 'Start Date' },
    { key: 'updated_at', label: 'Last Update' },
    { key: 'is_active', label: 'Task Status', CustomView: 'TaskStatusRow' }
  ]
  return (
    <Fragment>
      <Table data={caseList} cols={columnList}>
        {/* <template id="is_active">
          <button className={greenBtnClass}>Pending on you</button>
        </template> */}
      </Table>
    </Fragment>
  );
};

export default DesktopViewList;