import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitAuthentication from "../Firebase/Firebase.init";
FirebaseInitAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
            // .then(result => {
            //     // The signed-in user info.
            //     setUser(result.user);
            //     // ...
            // }).catch((error) => {
            //     // Handle Errors here.
            //     const errorMessage = error.message;
            //     // ...
            // });
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    return {
        user,
        signInUsingGoogle,
        logOut
    }
};


export default useFirebase;


