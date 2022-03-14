import './CreateAccountPage.styles.css';
import CreateAccount from '../../components/CreateAccountForm/CreateAccountForm.component';
import React, { useState } from 'react';
import UserCreationSuccess from '../../components/Success/UserCreationSuccess';
import Loader from '../../components/Loader/Loader.component';
import { useFirebase } from '../../firebase/FirebaseContext';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

export default function SignUpContainer() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useFirebase();

  const onSubmit = async ({
    email,
    password,
    passwordConfirm,
    fullName,
    mobile,
    address,
    city,
    country,
    zipCode,
  }) => {
    setIsLoading(true);
    const doesPasswordsMatch = getDoesPasswordsMatch({
      password,
      passwordConfirm,
    });
    if (!doesPasswordsMatch) {
      setIsLoading(false);

      alert("Passwords doesn't match"); // eslint-disable-line no-alert
      return;
    }
    const isSignedUp = await signUp({
      email,
      password,
      fullName,
      mobile,
      address,
      city,
      country,
      zipCode,
    });
    setIsLoading(false);
    if (isSignedUp) setIsSuccessful(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccessful) {
    return <UserCreationSuccess />;
  }
  return (
    <div className="createAccountContainer">
      <div style={{ flex: '2' }}>
        <CreateAccount onSubmit={onSubmit} />
      </div>
      <div className="create-account-image" style={{ flex: '1' }} />
    </div>
  );
}
