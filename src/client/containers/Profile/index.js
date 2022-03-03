import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileIsLoading, setProfileLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newFullName, setFullName] = useState(null);
  const [newMobile, setMobile] = useState(null);
  const [newZipcode, setZipcode] = useState(null);
  const [newCity, setCity] = useState(null);
  const [newCountry, setCountry] = useState(null);
  const [newAddress, setAddress] = useState(null);
  const { user, isLoading } = useAuthentication();

  function updateUserProfile(event) {
    event.preventDefault();

    console.log({
      newFullName,
      newMobile,
      newZipcode,
      newCity,
      newCountry,
      newAddress,
    });
    fetch(`/api/users/${user.uid}`, {
      method: 'PATCH',
      body: JSON.stringify({
        full_name: newFullName,
        address: newAddress,
        zipcode: newZipcode,
        city: newCity,
        country: newCountry,
        mobile: newMobile,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .finally(() => setShowForm(!showForm));
  }

  const showProfileUpdateForm = () => {
    setProfileData({});
    setShowForm(!showForm);
  };

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
      <h2>Welcome {user.email}(firebase)</h2>
      <pre>
        {JSON.stringify(
          {
            uid: user.uid,
            email: user.email,
          },
          undefined,
          4,
        )}
      </pre>

      {!profileIsLoading && profileData && (
        <>
          <h2>Welcome {profileData.full_name} (Database)</h2>
          <p>
            uid: {profileData.uid} <br />
            email: {profileData.email} <br /> address: {profileData.address}{' '}
            <br /> city: {profileData.city} <br /> country:{' '}
            {profileData.country} <br /> mobile: {profileData.mobile} <br />{' '}
            zipcode: {profileData.zipcode}
          </p>
        </>
      )}

      {!profileIsLoading && !profileData && <h2>Profile does not exist</h2>}
      <button type="button" onClick={showProfileUpdateForm}>
        Update your Profile
      </button>

      {showForm && profileData && (
        <form onSubmit={(event) => updateUserProfile(event)} id="UpdateProfile">
          <label>Full name:</label>
          <input
            type="text"
            name="newFullName"
            placeholder={profileData.full_name}
            onChange={(event) => setFullName(event.target.value)}
          />

          <label>Mobile:</label>
          <input
            type="number"
            name="newMobile"
            placeholder={profileData.mobile}
            onChange={(event) => setMobile(event.target.value)}
          />

          <label>Address:</label>
          <input
            type="text"
            name="newAddress"
            placeholder={profileData.address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <label>City:</label>
          <input
            type="text"
            name="newCity"
            placeholder={profileData.city}
            onChange={(event) => setCity(event.target.value)}
          />

          <label>Country:</label>
          <input
            type="text"
            name="newCountry"
            placeholder={profileData.country}
            onChange={(event) => setCountry(event.target.value)}
          />

          <label>Zipcode:</label>
          <input
            type="number"
            name="newZipcode"
            placeholder={profileData.zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}
