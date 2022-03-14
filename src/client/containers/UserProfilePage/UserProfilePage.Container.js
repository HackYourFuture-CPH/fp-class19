import React from 'react';
import './UserProfilePage.styles.css';
import UserProfile from '../../components/UserProfile/UserProfile.component';
import OrdersSummary from '../../components/OrdersSummary/OrderComponent';

export default function UserProfilePage() {

  return (
    <div>
      <UserProfile />
      <OrdersSummary />
    </div>
  );
}
