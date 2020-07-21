import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyCcwgvEd8V_qqMRsz_PWBU166eAZtevkBU",
    authDomain: "crwn-db-b70fd.firebaseapp.com",
    databaseURL: "https://crwn-db-b70fd.firebaseio.com",
    projectId: "crwn-db-b70fd",
    storageBucket: "crwn-db-b70fd.appspot.com",
    messagingSenderId: "1037921808572",
    appId: "1:1037921808572:web:0679ec4516bcc415ae60b9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;