import React from 'react';
import { container } from './style.js';
import DocumentView from './DocumentView';
import LeftMenuBar from '@components/LeftMenuBar';

const UserDashboardView = () => {
  return (
    <div className={container}>
      <LeftMenuBar />
      <DocumentView />
    </div>
  );
};

export default UserDashboardView;
