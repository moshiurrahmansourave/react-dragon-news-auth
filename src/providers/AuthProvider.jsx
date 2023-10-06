import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
         const unSubsCribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubsCribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        creatUser,
        singIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;