import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import Swal from 'sweetalert2'

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
    uname: user.email.split('@')[0],
    photoURL: `ui-avatars.com/api/?name=${user.email}`
  }).collection("userChatRooms")

  console.log(userRef, 'userref')
}

export const messagesRef = db.collection('messages')
// bikin collection message dulu
export const chatRoomRef = db.collection('ChatRoom')

export function startChat(emailUser, emailOffice) {
  // Swal.fire({
  //   title: 'Chat is coming soon!',
  //   showClass: {
  //     popup: 'animate__animated animate__fadeInDown'
  //   },
  //   hideClass: {
  //     popup: 'animate__animated animate__fadeOutUp'
  //   }
  // })
  // console.log('masuk')
  const initChat = db.collection('ChatRoom')
  let chatsId = (emailOffice> emailUser) ? `${emailOffice},${emailUser}` : `${emailUser},${emailOffice}`
  
  initChat.doc(chatsId).set({users:[emailUser,emailOffice]})
  // .collection('chats').doc().set({message:"halo", timeStamp: firebase.firestore.FieldValue.serverTimestamp()})
}
