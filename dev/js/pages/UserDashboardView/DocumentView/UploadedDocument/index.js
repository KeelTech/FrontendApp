import React, { useState } from 'react';
import DeleteModal from './DeleteModal/index';
import { useDispatch } from 'react-redux';
import { getFormattedTime, getFormattedDate } from '../../../../helpers/utils';
import { getSingleDocLink } from '../../../../actions/index';

import { wrapper } from './style';

function UploadedDocument(props) {
  const { title, date, deleteDocument, id, orignal_file_name, deleteDocId } =
    props;

  const dispatch = useDispatch();

  const documentOpenHandler = () => {
    getSingleDocLink({ doc_id: id }, dispatch);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={wrapper}>
      <div className="header">
        <h3 className="title">{title}</h3>
        <button className="dotMenu" onClick={openModal}>
          <img
            className="trashIcon"
            src={ASSETS_BASE_URL + '/images/common/trashIcon.svg'}
            alt="trash-Icon"
          />
        </button>
        <DeleteModal
          deleteDocument={deleteDocument}
          id={id}
          deleteDocId={deleteDocId}
          showModal={showModal}
          orignal_file_name={orignal_file_name}
          setShowModal={setShowModal}
        />
      </div>
      <p className="date">
        {getFormattedDate(date).formattedDate + ',  ' + getFormattedTime(date)}
      </p>
      <button onClick={documentOpenHandler} className="docButton">
        <img
          className="docIcon"
          src={ASSETS_BASE_URL + '/images/common/pdfIcon.svg'}
          alt="Doc-Icon"
        />
        <p className="pdfTitle">
          {orignal_file_name.length < 25
            ? orignal_file_name
            : orignal_file_name.substr(0, 20).concat('....pdf')}
        </p>
      </button>
    </div>
  );
}

export default UploadedDocument;
