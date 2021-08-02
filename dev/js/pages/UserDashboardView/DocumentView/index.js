import React, { useState, useEffect, Fragment } from 'react';
import Header from '@components/Header';
import UploadedDocument from './UploadedDocument/index';
import NotificationWidget from '@components/NotificationWidget';
import { loaderView } from '@constants';
import LoadingWidget from '@components/LoadingWidget';
import ProfileWidget from '@components/ProfileWidget';
import {
  getUserDocuments,
  uploadUserDocument,
  deleteUserDocument,
} from '@actions/index.js';
import FileUpload from '@components/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { body, loaderModalView, fileUploadModal } from './style.js';

function DocumentView() {
  const userDocuments = useSelector((state) => state.DOCUMENTS.userDocuments);
  const [searchDoc, setSearchDoc] = useState('');
  const [documentOwner, setDocumentOwner] = useState('');
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [updatedDocList, setUpdatedDocList] = useState(false);
  const [showLoader, setLoader] = useState(false);
  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const [fileSizeExceeded, setFileSizeExceede] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoader(true);
    getUserDocuments(dispatch, (err, data) => {
      if (data) {
        setLoader(false);
      }
    });
    return () => {
      setUpdatedDocList(false);
    };
  }, [updatedDocList]);

  const documentOwnerHandler = (event) => {
    setDocumentOwner(event.target.value);
  };

  const deleteDocument = (id, deleteDocId) => {
    setLoader(true);
    deleteUserDocument({ doc_id: deleteDocId }, dispatch, (err, data) => {
      if (data) {
        setUpdatedDocList(true);
        setLoader(false);
      }
      if (err) {
        setLoader(false);
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
    const { selectedFile, selectedFileType } = document;
    const { id } = selectedFileType;
    if (!selectedFile || !selectedFileType) {
      return;
    }
    const { size } = selectedFile;
    const filesize = size / (1024 * 1000);
    if (filesize > 10) {
      setFileSizeExceede(true);
      return;
    }
    setFileSizeExceede(false);
    setShowLoaderModal(true);
    uploadUserDocument({ selectedFile, id }, dispatch, (err, data) => {
      if (data) {
        setUpdatedDocList(true);
        setOpenFileUpload(false);
        setShowLoaderModal(false);
      }
      if (err) {
        setUpdatedDocList(false);
        setOpenFileUpload(true);
        setShowLoaderModal(false);
      }
    });
  };

  const DocumentRenderer = () => {
    // needs to be handled after API is created
    if (documentOwner === 'consultant') {
      return <h1>Consultant docs</h1>;
    }

    if (documentOwner == 'you' && newDocumentList.length > 0) {
      return newDocumentList.map((doc) => {
        if (doc.user_id) {
          return <UploadedDocumentNew key={doc.doc_id} {...doc} />;
        }
      });
    } else if (documentOwner == 'you' && newDocumentList.length === 0) {
      return (
        <div className="noDocsHeader">
          <h1>There are No Documents Uploaded By You</h1>
        </div>
      );
    }

    if (newDocumentList.length == 0) {
      return (
        <div className="noDocsHeader">
          <h1>There are No Documents to Display Right Now</h1>
        </div>
      );
    }

    return newDocumentList.map((doc) => {
      return <UploadedDocumentNew key={doc.doc_id} {...doc} />;
    });
  };

  return (
    <Fragment>
      {showLoader && (
        <div className={loaderView}>
          <LoadingWidget />
        </div>
      )}
      {showLoaderModal && (
        <div className={loaderModalView}>
          <LoadingWidget />
        </div>
      )}
      {openFileUpload && (
        <div className={fileUploadModal}>
          <FileUpload
            fileUploadModalClosed={fileuploadclosed}
            uploadFile={fileUploadDone}
            maxFileSize={fileSizeExceeded}
          />
        </div>
      )}
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
                defaultValue={documentOwner}
                onChange={documentOwnerHandler}
                required
              >
                <option value="" selected disabled hidden>
                  All
                </option>
                <option value="you">You</option>
                <option value="consultant">Consultatnt</option>
              </select>
            </form>
            <div className="searchUploadWrapper">
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
            </div>
          </div>
          <div className="uploadedDocsWrapper">
            <DocumentRenderer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DocumentView;
