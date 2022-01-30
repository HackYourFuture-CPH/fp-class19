function handleAuthErrors({ code, message }) {
  switch (code) {
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      return alert('Wrong password.'); // eslint-disable-line no-alert
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      return alert('Your password is too weak.'); // eslint-disable-line no-alert
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      return alert(message); // eslint-disable-line no-alert
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      return alert(message); // eslint-disable-line no-alert
    default:
      return alert(message); // eslint-disable-line no-alert
  }
}

const FIREBASE_ERROR_CODES = {
  WEAK_PASSWORD: 'auth/weak-password',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
};

/**
 *
 * @param {email, password} (sign in user)
 */
export async function signIn(auth, { email, password }) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function signUp(auth, { email, password }) {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function resetPassword(auth, { email }) {
  // [START sendpasswordemail]
  try {
    await auth.sendPasswordResetEmail(email);
    // Password Reset Email Sent!
    alert('Password Reset Email Sent!'); // eslint-disable-line no-alert
  } catch (error) {
    handleAuthErrors(error);
  }
  // [END sendpasswordemail];
}

export function signOut(auth) {
  auth.signOut();
}
