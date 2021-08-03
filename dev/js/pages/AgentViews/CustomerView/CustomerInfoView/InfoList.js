import React from "react";
import { list } from "./style";

const InfoList = () => {
  return (
    <ul className={list}>
      <li className="infofield">
        <span className="key">Date Of Birth:</span>
        <span className="value">05/01/1996</span>
      </li>
      <li className="infofield">
        <span className="key">Age:</span>
        <span className="value">23</span>
      </li>
      <li className="infofield">
        <span className="key">Address:</span>
        <span className="value">
          Flat No. T4, HSR Layout, Sector 1, Bangalore - 660001
        </span>
      </li>
      <li className="infofield">
        <span className="key">Qualification:</span>
        <span className="value">B.Tech(Information Technology)</span>
      </li>
      <li className="infofield">
        <span className="key">College Name:</span>
        <span className="value">SRM University</span>
      </li>
      <li className="infofield">
        <span className="key">College Address:</span>
        <span className="value status">
          SRM University, Ramapuram, Chennai, 600111
        </span>
      </li>
      <li className="infofield">
        <span className="key">Father's Name:</span>
        <span className="value status">John Williams</span>
      </li>
      <li className="infofield">
        <span className="key">Mother's Name:</span>
        <span className="value status">Scarlett Williams</span>
      </li>
    </ul>
  );
};

export default InfoList;
