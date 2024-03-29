import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { selectChannelId, selectChannelName } from './appSlice';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function Chat() {

  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  useEffect(() => {
      if (channelId) {
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [channelId]);

  const sendMessages = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input, 
      user: user,
    });

    setInput("");
  };

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>
      <div className='chat__messages'>
       {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
       ))}

      </div>

      <div className='chat__input'>
        <AddCircleIcon fontSize="large" />
        <form onSubmit={sendMessages}>
          <input 
            value={input}
            disabled={!channelId} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder={`Message #${channelName}`}
          />
          <button 
            disabled={!channelId}
            className="chat__inputButton" 
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className='chat__inputIcons'>
            <CardGiftcardIcon fontSize="large"/>
            <GifIcon fontSize="large"/>
            <EmojiEmotionsIcon fontSize="large"/>
        </div>
      </div>
    </div>
  )
}

export default Chat
