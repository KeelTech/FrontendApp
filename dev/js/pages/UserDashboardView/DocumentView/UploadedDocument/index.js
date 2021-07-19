import React, { useState } from 'react';
import { wrapper, menuBar } from './style';

function UploadedDocument(props) {
  const { title, date, content, deleteDocument } = props;

  const [showMenuBar, setMenuBar] = useState(false);

  return (
    <div className={wrapper}>
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
          <span onClick={deleteDocument}>Delete</span>
        </div>
      )}
      <p className="date">{date}</p>
      <a
        href="http://www.africau.edu/images/default/sample.pdf"
        target="_blank"
        rel="noreferrer noopener"
        download
      >
        {title}.pdf
      </a>
    </div>
  );
}

export default UploadedDocument;
