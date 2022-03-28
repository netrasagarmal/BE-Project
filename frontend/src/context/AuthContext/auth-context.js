import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

   const [user, setUser] = useState();

   function signUp(email, password){
      // return createUserWithEmailAndPassword(auth, email, password);
      return firebase.auth().createUserWithEmailAndPassword(email, password);
   }

   function login(email, password){
      return firebase.auth().signInWithEmailAndPassword(email, password);
   }

   function updateProfil(name) {
      const user = firebase.auth().currentUser;
      return user.updateProfile({
         displayName: name
       })
   }

   function logOut() {
      return firebase.auth().signOut();
   }

   function passwordReset(email) {
      return firebase.auth().sendPasswordResetEmail(email);
   }

   useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) =>{
         setUser(currentUser);
      });
      return () => {
         unsubscribe();
      }
   }, [])

   return(
      <userAuthContext.Provider value={{user, signUp, login, updateProfil, logOut, passwordReset}}>
         {children}
      </userAuthContext.Provider>
   )
}

export function useUserAuth() {
   return useContext(userAuthContext)
}