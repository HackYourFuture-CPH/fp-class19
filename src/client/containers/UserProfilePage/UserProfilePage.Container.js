import React from 'react';
import './UserProfilePage.styles.css';
import UserProfile from '../../components/UserProfile/UserProfile.component';
import OrdersSummary from '../../components/OrdersSummary/OrderComponent';
import { useAuthentication } from '../../hooks/useAuthentication';
import Loader from '../../components/Loader/Loader.component';

export default function UserProfilePage() {
  const { user, isLoading } = useAuthentication();
  const orders = (userId) => fetch(`api/orders/user/${userId}`);

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <div>
      <UserProfile />
      {orders(user.uid) ? <OrdersSummary orders={orders(user.uid)}/> : ''}
    </div>
  );
}
