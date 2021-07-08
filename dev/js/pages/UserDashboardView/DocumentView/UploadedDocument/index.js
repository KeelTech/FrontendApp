import React, { useState } from 'react';
import { wrapper, menuBar } from './style';

function UploadedDocument(props) {
  const { title, date, content } = props;

  const [showMenuBar, setMenuBar] = useState(false);

  return (
    <div className={wrapper}>
      <div className="header">
        <h3 className="title">{title}</h3>
        <img
          className="dotMenu"
          src={ASSETS_BASE_URL + '/images/common/dotMenu.svg'}
          alt="menu"
          onClick={() => setMenuBar((val) => !val)}
        />
        {showMenuBar && (
          <div className={menuBar}>
            <span>Download</span>
            <span>Delete</span>
          </div>
        )}
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default UploadedDocument;
