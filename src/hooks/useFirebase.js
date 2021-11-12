import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();
const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then((result) => {
                    setUser(result.user)
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const loginWithGoogle = (history, location) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
                const destination = location?.state?.from || '/';
                history.push(destination);
                // ...
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    };
    useEffect(() => {
        const auth = getAuth();
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    const logout = () => {
        setIsLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            setError('')
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false));
    };
    const saveUser = (email, name) => {
        const user = { email, name };
        fetch('http://https://nameless-wave-90962.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };
    return {
        loginWithGoogle, registerUser, error, user, loginUser, logout, isLoading

    }
};

export default useFirebase;