function handleAuthErrors({ code, message }) {
  switch (code) {
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      /*eslint-disable  */
      return alert('Wrong password.');
    /* eslint-enable */
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      /*eslint-disable  */
      return alert('Your password is too weak.');
    /* eslint-enable */
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      /*eslint-disable  */
      return alert(message);
    /* eslint-enable */
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      /*eslint-disable  */
      return alert(message);
    /* eslint-enable */

    default:
      /*eslint-disable  */
      return alert(message);
    /* eslint-enable */
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
    /*eslint-disable  */
    alert('Password Reset Email Sent!');
    /* eslint-enable */
  } catch (error) {
    handleAuthErrors(error);
  }
  // [END sendpasswordemail];
}

export function signOut(auth) {
  auth.signOut();
}
