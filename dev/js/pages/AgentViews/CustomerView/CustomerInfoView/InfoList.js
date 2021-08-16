import React from "react";
import { list } from "./style";

const InfoList = ({ info }) => {
  const {
    case_details = {},
    user_details = {},
    user_qualifications = [],
  } = info;
  const {
    fullname,
    mother_fullname,
    father_fullname,
    age,
    address,
    date_of_birth,
  } = user_details;

  return (
    <ul className={list}>
      <li className="infofield">
        <span className="key">Date Of Birth:</span>
        <span className="value">{date_of_birth}</span>
      </li>
      <li className="infofield">
        <span className="key">Age:</span>
        <span className="value">{age}</span>
      </li>
      <li className="infofield">
        <span className="key">Address:</span>
        <span className="value">{address}</span>
      </li>
      {user_qualifications.map((val) => {
        const { institute, grade, year_of_passing, start_date, city, country } =
          val;
        return (
          <React.Fragment>
            <li className="infofield">
              <span className="key">Qualification:</span>
              <span className="value">B.Tech(Information Technology)</span>
            </li>
            <li className="infofield">
              <span className="key">Year of Passing:</span>
              <span className="value">{year_of_passing}</span>
            </li>
            <li className="infofield">
              <span className="key">College Name:</span>
              <span className="value">{institute}</span>
            </li>
            <li className="infofield">
              <span className="key">College Address:</span>
              <span className="value status">
                {city},{country}
              </span>
            </li>
          </React.Fragment>
        );
      })}
      <li className="infofield">
        <span className="key">Father's Name:</span>
        <span className="value status">{father_fullname}</span>
      </li>
      <li className="infofield">
        <span className="key">Mother's Name:</span>
        <span className="value status">{mother_fullname}</span>
      </li>
    </ul>
  );
};

export default InfoList;
