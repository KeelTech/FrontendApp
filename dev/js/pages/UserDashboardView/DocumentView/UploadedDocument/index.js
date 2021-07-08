import React from 'react';
import { wrapper } from './style';

function UploadedDocument(props) {
  const { title, date, content } = props;

  return (
    <div className={wrapper}>
      <div className="header">
        <h3>{title}</h3>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default UploadedDocument;
