import React, { useState } from 'react';
import { UserCreationSuccess } from '../../components/UserCreationSuccess/UserCreationSuccess.component';
import { SignUp } from '../../components/Forms/SignUp.component';
import { Loader } from '../../components/Loader/Loader.component';
import { useFirebase } from '../../firebase/FirebaseContext';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

function SignUpPage() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signUp } = useFirebase();

  const onSubmit = async ({ email, password, passwordConfirm }) => {
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
    const isSignedUp = await signUp({ email, password });
    setIsLoading(false);
    if (isSignedUp) setIsSuccessful(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccessful) {
    return <UserCreationSuccess />;
  }

  return <SignUp onSubmit={onSubmit} />;
}

export { SignUpPage };
