import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';
import './UserProfile.styles.css';

export default function UserProfile() {
  const [profileData, setProfileData] = useState(null);
  const [profileIsLoading, setProfileLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newFullName, setFullName] = useState('');
  const [newMobile, setMobile] = useState('');
  const [newZipcode, setZipcode] = useState('');
  const [newCity, setCity] = useState('');
  const [newCountry, setCountry] = useState('');
  const [newAddress, setAddress] = useState('');
  const { user, isLoading } = useAuthentication();

  function updateUserProfile(event) {
    event.preventDefault();
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
      .finally(() => setShowForm(false));
  }

  const showProfileUpdateForm = () => {
    setShowForm(true);
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
        setFullName(data[0].full_name);
        setMobile(data[0].mobile);
        setAddress(data[0].address);
        setCity(data[0].city);
        setCountry(data[0].country);
        setZipcode(data[0].zipcode);
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
    <div className="user-profile">
      <p className="user-profile-title title-font-style">my account</p>
      <div className="user-profile-container">
        <div className="user-profile-block">
          <div>
            {!profileIsLoading && profileData && (
              <div className="user-contact-details">
                <p className="user-contact-title title-font-style text-capitalize">
                  contact details
                </p>
                <div>
                  <ul className="user-info-block">
                    <li className="user-details-content text-capitalize">
                      full name:
                    </li>
                    {!showForm && (
                      <li className="user-details-info">
                        {profileData.full_name}
                      </li>
                    )}
                    {showForm && profileData && (
                      <li>
                        <input
                          type="text"
                          name="newFullname"
                          value={newFullName}
                          placeholder={profileData.full_name}
                          onChange={(event) => setFullName(event.target.value)}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <div>
                  <ul className="user-info-block">
                    <li className="user-details-content text-capitalize">
                      email:
                    </li>
                    <li className="user-details-info">{profileData.email}</li>
                  </ul>
                </div>
                <div>
                  <ul className="user-info-block">
                    <li className="user-details-content text-capitalize">
                      mobile:
                    </li>
                    {showForm === false && (
                      <li className="user-details-info">
                        {profileData.mobile}
                      </li>
                    )}
                    {showForm && profileData && (
                      <li>
                        <input
                          type="number"
                          name="newMobile"
                          value={newMobile}
                          placeholder={profileData.mobile}
                          onChange={(event) => setMobile(event.target.value)}
                        />
                      </li>
                    )}
                  </ul>
                </div>
                <p className="user-contact-title title-font-style text-capitalize">
                  your items will be delivered here
                </p>
                <div>
                  <ul className="user-info-block">
                    <li className="user-details-content text-capitalize">
                      address:
                    </li>
                    {showForm === false && (
                      <li
                        className="@media only screen and (max-width: 1000px) {
                        .user-profile-block {
                            display: flex;
                            flex-direction: column;
                        }
                        .user-info-block {
                            display: flex;
                            flex-direction: column;
                            padding: 0;
                        }
                    } text-capitalize"
                      >
                        {profileData.address} <br />
                        {profileData.city} <br />
                        {profileData.country} <br />
                        {profileData.zipcode} <br />
                      </li>
                    )}
                    {showForm && profileData && (
                      <div>
                        <input
                          type="text"
                          name="newAddress"
                          value={newAddress}
                          placeholder={profileData.address}
                          className="user-profile-input-margin"
                          onChange={(event) => setAddress(event.target.value)}
                        />{' '}
                        <br />{' '}
                        <input
                          type="text"
                          name="newCity"
                          value={newCity}
                          placeholder={profileData.city}
                          className="user-profile-input-margin"
                          onChange={(event) => setCity(event.target.value)}
                        />{' '}
                        <br />{' '}
                        <input
                          type="text"
                          name="newCountry"
                          value={newCountry}
                          placeholder={profileData.country}
                          className="user-profile-input-margin"
                          onChange={(event) => setCountry(event.target.value)}
                        />{' '}
                        <br />{' '}
                        <input
                          type="number"
                          name="newZipcode"
                          value={newZipcode}
                          placeholder={profileData.zipcode}
                          className="user-profile-input-margin"
                          onChange={(event) => setZipcode(event.target.value)}
                        />
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="user-contact-edit-details">
            {showForm === false && (
              <button
                type="button"
                onClick={showProfileUpdateForm}
                className=" user-contact-edit-button text-capitalize"
              >
                edit contact details
              </button>
            )}
            {showForm && profileData && (
              <button
                type="button"
                onClick={(event) => updateUserProfile(event)}
                className=" user-contact-edit-button text-capitalize"
              >
                save details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
