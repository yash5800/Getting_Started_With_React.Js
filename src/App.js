import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import logo from './logo.svg';

function App() {
  const [messages, setMessages] = useState([]);
 
  const addMessage = (message)=>{
    setMessages([...messages,message]);
  };

  return(
        <Chat messages = {messages} addMessage = {addMessage}/>
  );
}

export default App;
