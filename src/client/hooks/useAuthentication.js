import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getApps } from 'firebase/app';
import { useFirebase } from '../firebase/FirebaseContext';

function authRedirect() {
  if (
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/'
  ) {
    window.location.href = '/';
  }
}

/**
 * Docs: https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
 */
export function useAuthentication() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isLoading: true,
    user: null,
  });

  const { isInitialized } = useFirebase();

  const firebaseInitialized = getApps().length > 0;

  useEffect(() => {
    if (!firebaseInitialized) {
      return;
    }

    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      // if user exists it means authenticated

      if (user) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user,
        });
        authRedirect();
      } else {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
        });
      }
    });
  }, [isInitialized, firebaseInitialized]);

  return { ...authState };
}
