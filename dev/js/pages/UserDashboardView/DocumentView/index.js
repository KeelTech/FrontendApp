import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import {
  getUserDocuments,
  uploadUserDocument,
  deleteUserDocument,
} from '@actions/index.js';
import FileUpload from '@components/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { body } from './style.js';

function DocumentView() {
  const userDocuments = useSelector((state) => state.DOCUMENTS.userDocuments);
  const [searchDoc, setSearchDoc] = useState('');
  const [documentOwner, setDocumentOwner] = useState('');
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [updatedDocList, setUpdatedDocList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getUserDocuments(dispatch, () => {});
    return () => {
      setUpdatedDocList(false);
    };
  }, [updatedDocList]);

  const documentOwnerHandler = (event) => {
    setDocumentOwner(event.target.value);
  };

  const deleteDocument = (id, deleteDocId) => {
    deleteUserDocument({ doc_id: deleteDocId }, dispatch, (err, data) => {
      if (data) {
        setUpdatedDocList(true);
      }
      if (err) {
        setUpdatedDocList(false);
      }
    });
  };

  const UploadedDocumentNew = (doc) => {
    return (
      <UploadedDocument
        key={doc.doc_id}
        title={doc.doc_type}
        date={doc.created_at}
        orignal_file_name={doc.orignal_file_name}
        deleteDocument={deleteDocument}
        id={doc.doc_id}
        deleteDocId={doc.id}
      />
    );
  };

  const handleSearchDoc = (event) => {
    setSearchDoc(event.target.value);
  };

  const newDocumentList = userDocuments.filter((docNmae) => {
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
    console.log(document);
    const { selectedFile, selectedFileType } = document;
    const { id } = selectedFileType;
    // uploadUserDocument({ selectedFile, id }, dispatch, (err, data) => {
    //   if (data) {
    //     setUpdatedDocList(true);
    //     setOpenFileUpload(false);
    //   }
    //   if (err) {
    //     setUpdatedDocList(false);
    //     setOpenFileUpload(true);
    //   }
    // });
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
