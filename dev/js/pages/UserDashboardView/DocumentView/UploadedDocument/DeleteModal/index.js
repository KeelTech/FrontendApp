import React, { useRef, useEffect, useCallback } from 'react';
import { Background } from './style';

const DeleteModal = ({
  showModal,
  setShowModal,
  deleteDocument,
  id,
  orignal_file_name,
  deleteDocId,
}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <div>
      {showModal ? (
        <div className={Background} onClick={closeModal} ref={modalRef}>
          <div className="ModalWrapper" showModal={showModal}>
            <div className="ModalContent">
              <h3>
                Are you sure you want to delete the Document{'  '}
                <span>( {orignal_file_name} )</span> ?
              </h3>
              <div className="btn-wrapper">
                <button onClick={() => deleteDocument(id, deleteDocId)}>
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DeleteModal;
