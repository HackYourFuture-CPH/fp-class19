import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader.component';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [profileIsLoading, setProfileLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const[newFullName, setFullName]=useState(null);
  const[newEmail, setEmail]=useState(null);
  const[newMobile, setMobile]=useState(null);
  const[newZipcode, setZipcode]=useState(null);
  const[newCity, setCity]=useState(null);
  const[newCountry, setCountry]=useState(null);
  const[newAddress, setAddress]=useState(null);
  const { user, isLoading } = useAuthentication();

  
function updateUserProfile (){

console.log({newFullName, newEmail, newMobile, newZipcode, newCity, newCountry, newAddress});
    /* fetch(`/api/users/${profileData.uid}`, {
      method: 'PATCH',
      body: JSON.stringify({
        full_name: newFullName,
        email: newEmail,
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
  .then((json) => console.log(json)) */
}


const showProfileUpdateForm = () => {
  setShowForm(!showForm);
}

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
      <h2>Welcome {user.email}</h2>
      <pre>
        {JSON.stringify(
          {
            uid: user.uid,
            email: user.email,
            displayName: newFullName,
          },
          undefined,
          4,
        )}
      </pre>

      {!profileIsLoading && profileData && (
        <>
          <h2>Welcome {profileData.full_name}</h2>
          <p>
            email: {profileData.email} <br /> Address: {profileData.address} <br /> UID: {profileData.uid} {' '}
          </p>
        </>
      )}

      {!profileIsLoading && !profileData && (
        <h2>Profile does not exist</h2>
      )}
      <button type='button' onClick={showProfileUpdateForm}>Update your Profile</button>

      {showForm && (
        <form onSubmit={updateUserProfile()} method='patch' id='UpdateProfile'>
          <label>Full name:</label>
					<input type="text" name="newFullName" placeholder={profileData.full_name} onSubmit={(event)=>setFullName(event)}/>
					
          <label>Email:</label>
					<input type="email" name="newEmail" placeholder={profileData.email} onSubmit={(event)=>setEmail(event)}/>
					
          <label>Mobile:</label>
					<input type="number" name="newMobile" placeholder={profileData.mobile} onSubmit={(event)=>setMobile(event)}/>
					
          <label>Address:</label>
					<input type="text" name="newAddress" placeholder={profileData.address} onSubmit={(event)=>setAddress(event)}/>
					
          <label>City:</label>
					<input type="text" name="newCity" placeholder={profileData.city} onSubmit={(event)=>setCity(event)}/>
					
          <label>Country:</label>
					<input type="text" name="newCountry" placeholder={profileData.country} onSubmit={(event)=>setCountry(event)}/>
					
          <label>Zipcode:</label>
					<input type="number" name="newZipcode" placeholder={profileData.zipcode} onSubmit={(event)=>setZipcode(event)}/>
					
          <button type='submit' >Update</button>
        </form>
      )}
      
    </div>
  );
}
