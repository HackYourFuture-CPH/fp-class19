import React from 'react';
import { Link } from 'react-router-dom';



export default function UserCreationSuccess() {
  return (
    <div style={{
      textTransform:'capitalize',
      textAlign:'center',
      fontWeight:'bold',
            }}>
      <p>Your account was successfully created.</p>
      <Link style={{
        textDecoration: 'none',
              }} to="/user-profile">
            go to profile page
          </Link>
    </div>
  );
}

UserCreationSuccess.propTypes = {};
