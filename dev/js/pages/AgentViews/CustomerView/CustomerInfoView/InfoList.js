import React from "react";
import { getFormattedDate } from '@helpers/utils.js';
import { list } from "./style";

const InfoList = ({ info }) => {
  const {
    case_details = {},
    user_details = {},
    user_qualifications = [],
    user_work_experience=[]
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
        <span className="value">{getFormattedDate(date_of_birth).formattedDate}</span>
      </li>
      <li className="infofield">
        <span className="key">Age:</span>
        <span className="value">{age}</span>
      </li>
      <li className="infofield">
        <span className="key">Address:</span>
        <span className="value">{address}</span>
      </li>
      <li className="infofield">
        <span className="key">Father's Name:</span>
        <span className="value status">{father_fullname}</span>
      </li>
      <li className="infofield">
        <span className="key">Mother's Name:</span>
        <span className="value status">{mother_fullname}</span>
      </li>
      {user_qualifications.map((val) => {
        const { institute, degree, grade, year_of_passing, start_date, city, state, country } =
          val;
        return (
          <React.Fragment>
            <li className="infofield">
              <span className="key">Qualification:</span>
              <span className="value">{degree}</span>
            </li>
            <li className="infofield">
              <span className="key">Grade:</span>
              <span className="value">{grade}</span>
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
                {city},{state},{country}
              </span>
            </li>
          </React.Fragment>
        );
      })}

      {user_work_experience.map((val) => {
        const { designation, company_name, job_description, job_type, start_date, city, state, country, end_date } =
          val;
        return (
          <React.Fragment>
            <li className="infofield">
              <span className="key">Job Designation:</span>
              <span className="value">{designation}</span>
            </li>
            <li className="infofield">
              <span className="key">Company Name:</span>
              <span className="value">{company_name}</span>
            </li>
            <li className="infofield">
              <span className="key">Job Description:</span>
              <span className="value">{job_description}</span>
            </li>
            <li className="infofield">
              <span className="key">Job Type:</span>
              <span className="value">{job_type}</span>
            </li>
            <li className="infofield">
              <span className="key">Job Start Date:</span>
              <span className="value">{getFormattedDate(start_date).formattedDate}</span>
            </li>
            <li className="infofield">
              <span className="key">Job End Date:</span>
              <span className="value">{getFormattedDate(end_date).formattedDate}</span>
            </li>
            <li className="infofield">
              <span className="key">Job Address:</span>
              <span className="value status">
                {city},{state},{country}
              </span>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default InfoList;
