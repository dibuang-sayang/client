import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgftFKHYsA3YvlqU1v5-h4BQZSI93kco0",
  authDomain: "dibuangsayang-chatbox.firebaseapp.com",
  projectId: "dibuangsayang-chatbox",
  databaseURL: "https://dibuangsayang-chatbox.firebaseio.com",
  storageBucket: "dibuangsayang-chatbox.appspot.com",
  messagingSenderId: "1027265599817",
  appId: "1:1027265599817:web:5dd6d20a2c1c8b4f7fa298"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth()
export const db = firebase.firestore();

export function signUpWithEmailPassword(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // console.log(user, 'dari signup firestore')
      saveUserToFirestore(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMsg = error.messaging
      console.log(error, errorCode, errorMsg, 'apasih errornya')
    })
}

export function signInWithEmailPassword(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user, 'user signed in')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage, 'apasih errornya di login')
    });
}

export function signInWithGoogle() {
  console.log('hit gsignin')
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export function signOutFirebase() {
  firebase.auth().signOut().then(() => {
    console.log('succeed logout')
  }).catch((error) => {
    console.log(error, 'happened')
  });
}

export function saveUserToFirestore({user}) {
  console.log(user, 'masuk')
  const userRef = db.collection('users')
  userRef.doc(user.email).set({
    uid: user.uid,
    email: user.email,
  })
  console.log(userRef, 'userref')
}

export function writeData() {}
