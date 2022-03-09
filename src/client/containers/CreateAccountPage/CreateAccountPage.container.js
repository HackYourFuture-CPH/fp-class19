import React from 'react';
import './CreateAccountPage.styles.css';
import CreateAccount from '../../components/CreateAccountForm/CreateAccountForm.component';

export default function CreateAccountPage() {
  return (
    <div className="createAccountContainer">
      <div style={{ flex: '2' }}>
        <CreateAccount />
      </div>
      <div className="create-account-image" style={{ flex: "1" }} />
    </div>
  );
}
