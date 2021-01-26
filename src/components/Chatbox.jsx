import React, { useRef, useState } from 'react'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// import './chatbox.css'
import { auth, messagesRef } from '../config/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function ChatRoom () {
  const dummy = useRef();
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <React.Fragment>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </React.Fragment>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img className="" src={photoURL || 'https://api.hello-avatar.com/adorables/myseed'} alt='avatars'/>
      <p>{text}</p>
    </div>
  </>)
}

export default function ChatBox() {
  const [user] = useAuthState(auth)
  
  return (
    <div className="flex h-screen antialiased text-gray-800 mt-20">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white overflow-x-hidden">
          <section>
            {user ? <ChatRoom /> : <h1>not logged in</h1>}
          </section>
        </div>
      </div>
    </div>
  )
}
