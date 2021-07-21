import React, { useState } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { getUserDocuments } from '../../../actions/index.js';
import FileUpload from '@components/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { uploadedDocuments } from './MockData.js';
import { body } from './style.js';

function DocumentView() {
  const [searchDoc, setSearchDoc] = useState('');
  const [documentOwner, setDocumentOwner] = useState('');
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [userAddedDocs, setUserAddedDocs] = useState(uploadedDocuments.data);

  const userDocuments = useSelector((state) => state.DOCUMENTS.userDocuments);

  const dispatch = useDispatch();

  const documentOwnerHandler = (event) => {
    console.log(documentOwner);
    setDocumentOwner(event.target.value);
  };

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

  const deleteDocument = (id) => {
    setUserAddedDocs((prevState) => {
      return prevState.filter((val) => {
        return id != val.doc_id;
      });
    });
  };

  const downloadDocument = () => {
    console.log('downloading');
  };

  const UploadedDocumentNew = (doc) => {
    return (
      <UploadedDocument
        key={doc.doc_id}
        title={doc.doc_type}
        date={doc.created_at}
        content={doc.content}
        deleteDocument={deleteDocument}
        downloadDocument={downloadDocument}
        id={doc.doc_id}
      />
    );
  };

  const handleSearchDoc = (event) => {
    setSearchDoc(event.target.value);
  };

  const openFileUploadModal = () => {
    setOpenFileUpload(true);
  };

  const fileUploadDone = (value) => {
    console.log('value is : ', value);
  };

  const fileuploadclosed = () => {
    setOpenFileUpload(false);
  };

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
            <select
              className="optionsMenu"
              onChange={documentOwnerHandler}
              required
            >
              <option value="none" selected disabled hidden>
                All
              </option>
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
          <button onClick={openFileUploadModal} className="uploadButton">
            Upload Document
          </button>
          {openFileUpload && (
            <FileUpload
              fileUploadModalClosed={fileuploadclosed}
              fileUploaded={fileUploadDone}
            />
          )}
        </div>
        <div className="uploadedDocsWrapper">
          {userAddedDocs
            .filter((val) => {
              if (searchDoc === '') {
                return val;
              } else if (
                val.doc_type.toLowerCase().includes(searchDoc.toLowerCase())
              ) {
                return val;
              }
            })
            .map((doc) => {
              if (documentOwner === '') {
                return <UploadedDocumentNew key={doc.doc_id} {...doc} />;
              }
              if (documentOwner === 'you' && doc.user_id) {
                return <UploadedDocumentNew key={doc.doc_id} {...doc} />;
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default DocumentView;
