import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';


export default function Profile() {
  const [userData, setUserData]=useState([])
  const { user, isLoading } = useAuthentication();

  useEffect(() => {
    const id="TestUser5";
    fetch(`api/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data[0]){
        throw new Error('Could not check if user present in Database:', 404);
      }
      setUserData(data)})
    .catch((error) => {
      if (error instanceof Error) {
        throw error;
    }
    throw new Error('Unexpected error', 500);
    });
  },[]);
console.log({userData});
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Welcome {user.email}</h2>
      <pre>
        {JSON.stringify(
          {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          },
          undefined,
          4,
        )}
      </pre>

      
{/* <h2>Welcome {userData}</h2>
<p>uid: {userData.uid} <br/> Email: {userData.email} </p> */}
    </div>
  );
}
