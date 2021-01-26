import React, { useRef, useState } from 'react';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import './chatbox.css'
import { auth, messagesRef } from '../config/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useQuery } from '@apollo/client';
import { user } from '../query';

function ChatRoom() {
  const dummy = useRef();
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  console.log(auth.currentUser, ' oke ');
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, email } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      email,
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
  console.log(messages);

  return (
    <React.Fragment>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </React.Fragment>
  );
}

function ChatMessage(props) {
  console.log(props);
  const { text, uid, photoURL, email } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="flex flex-row">
          {'  '}
          <img
            className="h-8 w-8 rounded-full"
            src={photoURL || 'https://api.hello-avatar.com/adorables/myseed'}
            alt="avatars"
          />
          <p>{email}</p>
        </div>
        <p>{text}</p>
        <br />
      </div>
    </>
  );
}

export default function ChatBox() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex h-96 overflow-hidden antialiased text-gray-800 mt-20 fixed bottom-0 right-20 ">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-full bg-white overflow-x-hidden">
          <section>{user ? <ChatRoom /> : <h1>not logged in</h1>}</section>
        </div>
      </div>
    </div>
  );
}
