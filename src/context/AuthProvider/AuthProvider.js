import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';




export const AuthContextProvider = createContext()
const auth = getAuth(app);

function AuthProvider({children}) {
    
  

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    
    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const verify_email=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('User auth inside state changed ',currentUser);
            if(  currentUser == null || currentUser?.emailVerified){
            setUser(currentUser);
            }
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo ={ user, providerLogin ,logOut , createUser,signIn ,loading,updateUserProfile,verify_email}
  
    return (
    <AuthContextProvider.Provider value={authInfo}>

        {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthProvider