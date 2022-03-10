import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut as firebaseSignout,
} from 'firebase/auth';


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
export async function signIn({ email, password }) {
    try {
        await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
        handleAuthErrors(error);
    }
}

export async function signUp({
    email,
    password,
    fullName,
    mobile,
    address,
    city,
    country,
    zipCode,
}) {
    try {
        await createUserWithEmailAndPassword(getAuth(), email, password);
        const { uid } = getAuth().currentUser;
        addUserToDatabase({
            uid,
            email,
            fullName,
            mobile,
            address,
            city,
            country,
            zipCode
        });
        return true;
    } catch (error) {
        handleAuthErrors(error);
    }
}

export async function resetPassword({ email }) {
    // [START sendpasswordemail]
    try {
        await sendPasswordResetEmail(getAuth(), email);
        // Password Reset Email Sent!
        alert('Password Reset Email Sent!'); // eslint-disable-line no-alert
    } catch (error) {
        handleAuthErrors(error);
    }
    // [END sendpasswordemail];
}

export function signOut() {
    firebaseSignout(getAuth());
}

function addUserToDatabase(user) {
    fetch(`api/users/${user.uid}`)
        .then(async(res) => res.json())
        .then((data) => {
            // if not present add new user id to database
            if (!data[0]) {
                fetch('api/users', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        uid: user.uid,
                        full_name: user.fullName,
                        email: user.email,
                        mobile: user.mobile,
                        address: user.address,
                        zipcode: user.zipCode,
                        city: user.city,
                        country: user.country,
                    }),
                }).catch((e) => {
                    throw new Error('Could not add user to Database:', e.message);
                });
            }
        })
        .catch((e) => {
            throw new Error('Could not add user to Database:', e.message);
        });
}