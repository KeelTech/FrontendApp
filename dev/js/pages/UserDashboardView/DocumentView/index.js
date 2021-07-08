import React, { useState } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import { body } from './style.js';

function DocumentView() {
  const [searchDoc, setSearchDoc] = useState('');

  const handleSearchDoc = (event) => {
    setSearchDoc(event.target.value);
  };

  const uploadedDocuments = [
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
    {
      id: 1,
      title: 'Aadhar Card',
      date: '2 March 2021, 12:30 PM',
      content: 'pdf file',
    },
  ];

  return (
    <div className={body}>
      <div className="mainView">
        <Header headerText="All Your Documents Are safe with us!">
          <div className="notification">
            <span>Notification button</span>
          </div>
          <div className="user-info">
            <b className="user-name">shubh wadekar </b>
            <br />
            <b className="user-package">premium user</b>
          </div>
          <button className="user"></button>
        </Header>
        <div className="upload-section">
          <form className="uploaded-by">
            <label className="upload-text">Uploaded By</label>
            <select className="options-menu">
              <option value="you">You</option>
              <option value="consultant">Consultatnt</option>
            </select>
          </form>
          <form className="search-docs-wrapper">
            <img
              className="search-icon"
              src={ASSETS_BASE_URL + '/images/common/search.svg'}
              alt="search"
            />
            <input
              className="search-docs"
              placeholder="Search Documents"
              value={searchDoc}
              onChange={handleSearchDoc}
            />
          </form>
          <div className="upload-docs">
            <button className="upload-button">Upload Document</button>
            <img
              className="upload-icon"
              src={ASSETS_BASE_URL + '/images/common/uploadDoc.svg'}
              alt="upload"
            />
          </div>
        </div>
        <div className="uploaded-docs-wrapper">
          {uploadedDocuments.map((doc) => {
            return (
              <UploadedDocument
                key={doc.id}
                title={doc.title}
                date={doc.date}
                content={doc.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DocumentView;
