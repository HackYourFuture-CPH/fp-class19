import React from 'react';
import './UserProfilePage.styles.css';
import UserProfile from '../../components/UserProfile/UserProfile.component';
import OrdersSummary from '../../components/OrdersSummary/OrdersSummary.component';
import { useAuthentication } from '../../hooks/useAuthentication';
import Loader from '../../components/Loader/Loader.component';

export default function UserProfilePage() {
  const { user, isLoading } = useAuthentication();
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    if (!user?.uid) {
      return;
    }

    fetch(`/api/orders/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error('Could not check if user present in Database:', 404);
        }
        setOrders(data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error('Unexpected error', 500);
      })
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <div>
      <UserProfile />
      {orders.length!=0 ? <OrdersSummary orders={orders}/> : ''}
    </div>
  );
}
