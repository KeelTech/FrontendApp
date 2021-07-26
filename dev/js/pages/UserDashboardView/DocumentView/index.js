import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { getUserDocuments, uploadUserDocument } from '@actions/index.js';
import FileUpload from '@components/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { body } from './style.js';

function DocumentView() {
  const userDocuments = useSelector((state) => state.DOCUMENTS.userDocuments);
  const [searchDoc, setSearchDoc] = useState('');
  const [documentOwner, setDocumentOwner] = useState('');
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [userAddedDocs, setUserAddedDocs] = useState(userDocuments);

  const dispatch = useDispatch();

  useEffect(() => {
    getUserDocuments(dispatch, (err, data) => {
      if (data) {
        setUserAddedDocs(data);
      }
      if (err) {
        console.log(err);
      }
    });
  }, []);

  const documentOwnerHandler = (event) => {
    setDocumentOwner(event.target.value);
  };

  const deleteDocument = (id) => {
    setUserAddedDocs((prevState) => {
      return prevState.filter((val) => {
        return id != val.doc_id;
      });
    });
  };

  const UploadedDocumentNew = (doc) => {
    return (
      <UploadedDocument
        key={doc.doc_id}
        title={doc.doc_type}
        date={doc.created_at}
        content={doc.content}
        deleteDocument={deleteDocument}
        id={doc.doc_id}
      />
    );
  };

  const handleSearchDoc = (event) => {
    setSearchDoc(event.target.value);
  };

  const newDocumentList = userAddedDocs.filter((docNmae) => {
    if (searchDoc !== '') {
      return docNmae.doc_type.toLowerCase().includes(searchDoc.toLowerCase());
    } else {
      return docNmae;
    }
  });

  const openFileUploadModal = () => {
    setOpenFileUpload(true);
  };

  const fileuploadclosed = () => {
    setOpenFileUpload(false);
  };

  const fileUploadDone = (document) => {
    const { selectedFile, selectedFileType } = document;
    const { value } = selectedFileType;
    uploadUserDocument({ selectedFile, value }, dispatch, (err, data) => {
      if (data) {
        setOpenFileUpload(false);
      }
      if (err) {
        console.log(err);
        setOpenFileUpload(true);
      }
    });
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
              uploadFile={fileUploadDone}
            />
          )}
        </div>
        <div className="uploadedDocsWrapper">
          {newDocumentList.map((doc) => {
            if (
              documentOwner === '' ||
              (documentOwner === 'you' && doc.user_id)
            ) {
              return <UploadedDocumentNew key={doc.doc_id} {...doc} />;
            } else {
              return (
                <div>
                  <h1>Cunsoltant Documents</h1>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default DocumentView;
