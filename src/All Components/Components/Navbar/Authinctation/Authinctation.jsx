import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthConnect = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authinctation = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignin = (auth) => {
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Curreuser) => {
            console.log(Curreuser);
            setUser(Curreuser)
            setLoading(false)
        })
        return () => unsubscribe()

    }, [])


    const authinfo = { user, loading, CreateUser, LoginUser, GoogleSignin,logout }

    return (
        <AuthConnect.Provider value={authinfo}>
            {children}
        </AuthConnect.Provider>
    );
};

export default Authinctation;