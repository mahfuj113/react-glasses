import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }
    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //singin user
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    //sign out user
    const logOut = () => {
        signOut(auth)
    }

    //using observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
    
    const authentication = {
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading,
        githubLogin,
        handleUpdateProfile,
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;