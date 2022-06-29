import React, {useState, useEffect} from 'react';
import {FormControl, Input, IconButton} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []  )

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [] ) //condition


  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h3>{username}</h3>

      <form className="App_form">

        <FormControl className="App_formControl">
          <Input className="App_input" placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)}/>

          <IconButton className="App_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> 
          <SendIcon />
          </IconButton>
      
        </FormControl>
          
      </form>

      <FlipMove> 
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>

          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
