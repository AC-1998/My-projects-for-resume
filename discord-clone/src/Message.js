import React from 'react'
import './Message.css';
import { Avatar } from '@mui/material';


function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className='message__info'>
            <h4>Andres Cheung
                <span className='message__timestamp'> This is a time stamp</span>
            </h4>

            <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message
