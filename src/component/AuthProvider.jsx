import {   createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase.config";
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

 const [user,setUser]=useState(null);
 const [loading,setLoading]=useState(true);
 const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
    
 }
 const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
    
 }

 const logOut=()=>{
    setLoading(true);
    return signOut(auth);
   

 }
 useEffect(()=>{
    const unSubcribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('obserbing current user');
        setLoading(false)

    })

    return ()=>{
        unSubcribe();
    }
 },[]);

const authInfo={ user,createUser,signInUser,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;