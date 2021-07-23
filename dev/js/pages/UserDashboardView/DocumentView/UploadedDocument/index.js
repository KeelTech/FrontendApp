import React, { useState } from 'react';
import DeleteModal from './DeleteModal/index';
import { wrapper } from './style';

function UploadedDocument(props) {
  const { title, date, deleteDocument, id } = props;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={wrapper}>
      <div className="header">
        <h3 className="title">{title}</h3>
        <button className="dotMenu" onClick={openModal}>
          X
        </button>
        <DeleteModal
          deleteDocument={deleteDocument}
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <p className="date">{date}</p>
      <a
        href="http://www.africau.edu/images/default/sample.pdf"
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}.pdf
      </a>
    </div>
  );
}

export default UploadedDocument;
