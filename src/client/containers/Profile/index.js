import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileIsLoading, setProfileLoading] = useState(true);
  const { user, isLoading } = useAuthentication();

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    setProfileLoading(true);

    fetch(`/api/users/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data[0]) {
          throw new Error('Could not check if user present in Database:', 404);
        }

        console.log(data);
        setProfileData(data[0]);
      })
      .catch((error) => {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error('Unexpected error', 500);
      })
      .finally(() => setProfileLoading(false));
  }, [user]);

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

      {!profileIsLoading && profileData && (
        <>
          <h2>Welcome {profileData.name}</h2>
          <p>
            email: {profileData.email} <br /> Address: {profileData.address}{' '}
          </p>
        </>
      )}

      {!profileIsLoading && !profileData && (
        <>
          <h2>Profile does not exist</h2>
        </>
      )}
    </div>
  );
}
