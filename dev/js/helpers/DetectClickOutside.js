import React, { useEffect, Fragment } from 'react';

const DetectClickOutside = ({ targetRef, clickOutside, children }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        clickOutside();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [targetRef, clickOutside]);

  return <Fragment>{children}</Fragment>;
};

export default DetectClickOutside;