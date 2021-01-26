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

// register user ke auth firebase
export function signUpWithEmailPassword(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      saveUserToFirestore(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMsg = error.messaging
      console.log(error, errorCode, errorMsg, 'apasih errornya')
    })
}


// sign in user buat dapet auth state
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

// sign in with google
export function signInWithGoogle() {
  console.log('hit gsignin')
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

// sign out firebase
export function signOutFirebase() {
  firebase.auth().signOut().then(() => {
    console.log('succeed logout')
  }).catch((error) => {
    console.log(error, 'happened')
  });
}

// masukin data user ke firestore
export function saveUserToFirestore({user}) {
  const userRef = db.collection('users')
  userRef.doc(user.email).set({
    uid: user.uid,
    email: user.email,
    uname: user.email.split('@')[0]
  }).collection("userChatRooms").set({})
  console.log(userRef, 'userref')
}

export const messagesRef = db.collection('messages')
// bikin collection message dulu
export const chatRoomRef = db.collection('ChatRoom')

export function startChat(emailUser, emailOffice) {
  console.log('masuk')
  const userChat = db.collection('users').doc(emailOffice).collection('userChatRooms')
  const initChat = db.collection('ChatRoom')
  if (emailOffice > emailUser) {
    console.log('masuk sini')
    initChat.doc(emailOffice+','+emailUser)
    .set({
      chatId: emailOffice+','+emailUser,
      users: [ emailUser, emailOffice]
    })
    userChat.doc(emailOffice+','+emailUser).set({
      otherEmail: emailOffice
    })
  } else {
    console.log('masuk situ')
    initChat.doc(emailUser+','+emailOffice)
    .set({
      chatId: emailUser+','+emailOffice,
      users: [ emailUser, emailOffice]
    })
    userChat.doc(emailUser+','+emailOffice).set({
      otherEmail: emailOffice
    })
  }
}

// get document
export const getDocument = (emailUser) => {
  const docRef = db.collection('message').doc()

}

