import React from "react";
import { lists, keys, values, status } from "./style.js";

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
    <div>
      {customerLists.map((list) => (
        <ul key={list.caseId} className={lists}>
          <li>
            <h2 className={keys}>Case Id:</h2>
            <h2 className={values}>{list.caseId}</h2>
          </li>
          <li>
            <h2 className={keys}>Name:</h2>
            <h2 className={values}>{list.name}</h2>
          </li>
          <li>
            <h2 className={keys}>Case Type:</h2>
            <h2 className={values}>{list.caseType}</h2>
          </li>
          <li>
            <h2 className={keys}>Last Update:</h2>
            <h2 className={values}>{list.lastUpdate}</h2>
          </li>
          <li>
            <h2 className={keys}>Start Date:</h2>
            <h2 className={values}>{list.startDate}</h2>
          </li>
          <li>
            <h2 className={keys}>Task Status:</h2>
            <h2 className={(values, status)}>{list.tastStatus}</h2>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MobileViewList;
