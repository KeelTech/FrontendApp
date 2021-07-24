import React, { Fragment } from "react";
import { getFormattedTime, getFormattedDate } from '@helpers/utils';
import { greenBtnClass, redBtnClass } from "./style.js";
import Table from "@components/Table";

const DesktopViewList = ({ handleCustomerClick, caseList }) => {
  const columnList = [{ key: 'case_id' }, { key: 'user' }, { key: 'plan' }, { key: 'start_date' }, { key: 'updated_at' }, { key: 'is_active' }]
  return (
    <Fragment>
      <Table data={caseList} cols={columnList}>
        <template id="is_active">
          <button className={greenBtnClass}>Pending on you</button>
        </template>
      </Table>
    </Fragment>
  );
};

export default DesktopViewList;