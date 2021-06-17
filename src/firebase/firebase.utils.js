// no terminal foi : npm install firebase

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
  apiKey: "AIzaSyDC6Y5TQ6qYHa3dlWkgmCC8fEWS_-EmQW4",
  authDomain: "crwn-db-e4f6c.firebaseapp.com",
  projectId: "crwn-db-e4f6c",
  storageBucket: "crwn-db-e4f6c.appspot.com",
  messagingSenderId: "986492972158",
  appId: "1:986492972158:web:73a8afcdb96ce33ca63c2f"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;