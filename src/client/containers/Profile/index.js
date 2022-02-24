import React from 'react';
import Loader from '../../components/Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Profile() {
  const { user, isLoading } = useAuthentication();

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
    </div>
  );
}
