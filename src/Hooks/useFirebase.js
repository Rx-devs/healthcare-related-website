import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitAuthentication from "../Firebase/Firebase.init";
FirebaseInitAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();

    // sign in using google
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



    // email password register

    // email password
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = e => {
        setconfirmPassword(e.target.value);
    }
    // toggle login 
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    
    const handleRegister = e => {
        e.preventDefault();
        console.log('register now');
        if (password.length < 6) {
            setError("Password must be 6 characters long");
            return;
        }
        else if (password !== confirmPassword) {
            setError("Passwords are not matched");
            return;
        }
        
        // toggle 
        isLogin ? loginProcess(email,password)  : createNewUser(email, password);
        
    }
    // user login
    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    // register new user
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError("Email has been already registered. Please Login.");
            });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
                setError('Please verify your email');
        })
    }

    // set up user name
    const setUserName = () => {
        updateProfile(auth.currentUser,{displayName:name})
            .then(result => {
            console.log(result)
        })
    }

    

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleRegister,
        error,
        toggleLogin,
        isLogin,
        handleNameChange,
        loginProcess


    }
};


export default useFirebase;


