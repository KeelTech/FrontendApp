import React from "react";
import {lists, keys, values, status, } from "./style.js";

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
            <h2  className={values}>{list.caseId}</h2>
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
            <h2 className={values, status}>{list.tastStatus}</h2>
          </li>
        </ul>
      ))}
    </div>);
  // return (
  //   <div>
  //     {customerLists.map((list) => (
  //       <table key={list.caseId} className={lists}>
  //         <tbody>
  //           <tr>
  //             <td className={keys}>Case Id:</td>
  //             <td className={values}>{list.caseId}</td>
  //           </tr>
  //           <tr>
  //             <td className={keys}>Name:</td>
  //             <td  className={values}>{list.name}</td>
  //           </tr>
  //           <tr>
  //             <td className={keys}>Case Type:</td>
  //             <td  className={values}>{list.caseType}</td>
  //           </tr>
  //           <tr>
  //             <td className={keys}>Last Update:</td>
  //             <td  className={values}>{list.lastUpdate}</td>
  //           </tr>
  //           <tr>
  //             <td className={keys}>Start Date:</td>
  //             <td  className={values}>{list.startDate}</td>
  //           </tr>
  //           <tr>  
  //             <td className={keys}>Task Status:</td>
  //             <td  id={status} className={values}>{list.tastStatus}</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     ))}
  //   </div>);
};

export default MobileViewList;
