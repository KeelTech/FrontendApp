import React,{Fragment} from "react";
import {lists, customer} from "./style.js";

const MobileViewList = () => {
  const customerLists = [
    {
      caseId: "#1290968",
      name: "Samantha Williams",
      caseType: "Express Entry",
      lastUpdate: "4 hours ago",
      startDate: "23/03/2021",
      tastStatus: "Pending on you",
    },
    {
      caseId: "#1290968",
      name: "Samantha Williams",
      caseType: "Express Entry",
      lastUpdate: "4 hours ago",
      startDate: "23/03/2021",
      tastStatus: "Pending on you",
    },
    {
      caseId: "#1290968",
      name: "Samantha Williams",
      caseType: "Express Entry",
      lastUpdate: "4 hours ago",
      startDate: "23/03/2021",
      tastStatus: "Pending on you",
    },
    {
      caseId: "#1290968",
      name: "Samantha Williams",
      caseType: "Express Entry",
      lastUpdate: "4 hours ago",
      startDate: "23/03/2021",
      tastStatus: "Pending on you",
    },
    {
      caseId: "#1290968",
      name: "Samantha Williams",
      caseType: "Express Entry",
      lastUpdate: "4 hours ago",
      startDate: "23/03/2021",
      tastStatus: "Pending on you",
    },
  ];
  return (
    <Fragment>
      {customerLists.map((list) => (
        <ul key={list.caseId} className={lists}>
          <li className={customer}>
            <h2 className='key'>Case Id:</h2>
            <h2 className='value'>{list.caseId}</h2>
          </li>
          <li className={customer}>
            <h2 className='key'>Name:</h2>
            <h2 className='value'>{list.name}</h2>
          </li>
          <li className={customer}>
            <h2 className='key'>Case Type:</h2>
            <h2 className='value'>{list.caseType}</h2>
          </li>
          <li className={customer}>
            <h2 className='key'>Last Update:</h2>
            <h2 className='value'>{list.lastUpdate}</h2>
          </li>
          <li className={customer}>
            <h2 className='key'>Start Date:</h2>
            <h2 className='value'>{list.startDate}</h2>
          </li>
          <li className={customer}>
            <h2 className='key'>Task Status:</h2>
            <h2 className='value status'>{list.tastStatus}</h2>
          </li>
        </ul>
      ))}
    </Fragment>
  );
};

export default MobileViewList;