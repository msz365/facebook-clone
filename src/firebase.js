import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvIRMQa8SMWKZChZTpoYWf_mrJVl4VgnI",
    authDomain: "facebook-clone-e6bba.firebaseapp.com",
    projectId: "facebook-clone-e6bba",
    storageBucket: "facebook-clone-e6bba.appspot.com",
    messagingSenderId: "1021497949370",
    appId: "1:1021497949370:web:47c811bf15fc253d339683",
    measurementId: "G-H2JVFVEG0F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
