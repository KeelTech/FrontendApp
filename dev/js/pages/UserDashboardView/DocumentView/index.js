import React, { useState } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { getUserDocuments } from '../../../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { body } from './style.js';

function DocumentView() {
  const [searchDoc, setSearchDoc] = useState('');

  const userDocuments = useSelector((state) => state.DOCUMENTS.userDocuments);

  const dispatch = useDispatch();

  const fetchuserDocuments = () => {
    getUserDocuments(dispatch, (err, data) => {
      if (data) {
        console.log('data is', data);
      }
      if (err) {
        console.log(err);
      }
    });
  };

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
          <div className="headerView">
            <NotificationWidget />
            <ProfileWidget />
          </div>
        </Header>
        <div className="uploadSection">
          <form className="uploadedBy">
            <label className="uploadText">Uploaded By</label>
            <select className="optionsMenu">
              <option value="you">You</option>
              <option value="consultant">Consultatnt</option>
            </select>
          </form>
          <form className="searchDocsWrapper">
            <input
              className="searchDocs"
              placeholder="Search Documents"
              value={searchDoc}
              onChange={handleSearchDoc}
            />
          </form>
          <button onClick={fetchuserDocuments} className="uploadButton">
            Upload Document
          </button>
        </div>
        <div className="uploadedDocsWrapper">
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
