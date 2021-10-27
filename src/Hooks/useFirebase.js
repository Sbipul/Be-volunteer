import initAuth from "../Firebase/init";
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";

initAuth()

const useFirebase = () => {

    const [user,setUser] = useState({})
    const [error,setError] = useState('')

    // providers 
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        return signInWithPopup(auth, provider)
            
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
        }
      });


      const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            
        });
      }

    return {
        handleGoogle,user,error,setUser,setError,logOut
    }
};

export default useFirebase;