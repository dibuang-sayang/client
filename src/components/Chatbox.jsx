import React, { useRef, useState } from 'react';

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { auth, messagesRef } from '../config/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';

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
      <main className=''>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <footer className="flex flex-row fixed z-30 bg-white h-10 px-8 py-8 items-center bottom-0 ">
        <form onSubmit={sendMessage} className="flex-col">
          <input
            className="col-auto w-full outline-none border-none text-md"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='say something nice'
          />
          </form>
          <button className="col-span-1" type='submit' disabled={!formValue}>
            ▶
          </button>
      </footer>
    </React.Fragment>
  );
}

function ChatMessage(props) {
  console.log(props);
  const { text, uid, photoURL, email } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <React.Fragment>
      <div className={`message ${messageClass}`}>
        <div className='flex flex-row'>
          {'  '}
          <img
            className='h-8 w-8 rounded-full col-span-1'
            src={photoURL || 'https://api.hello-avatar.com/adorables/myseed'}
            alt='avatars'
          />
          <small className="z-30 col-span-1">{email}</small>
        </div>
        <p>{text}</p>
        </div>
    </React.Fragment>
  );
}

export default function ChatBox() {
  const [user] = useAuthState(auth);

  return (
    <div className='flex h-96 overflow-hidden antialiased text-gray-800 fixed bottom-0 right-20 m-0'>
      <div className='flex flex-row h-full w-full overflow-x-hidden text-center'>
        <header className='flex fixed z-30 bg-white h-10 px-8 py-8 items-center'>
          <h1>🗑️dibuang sayang🏃‍♂️💨🚮</h1>
        </header>
        <div className='flex flex-col w-full bg-white overflow-x-hidden'>
          <section className='flex flex-col justify-items-center'>
            {user ? (
              <ChatRoom />
            ) : (
              <React.Fragment>
                <h1>Please Login First!</h1>
                <Link to='Login'>Login!</Link>
              </React.Fragment>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}


