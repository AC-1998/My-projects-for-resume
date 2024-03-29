import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://1000logos.net/wp-content/uploads/2021/06/Discord-logo-2015.png' alt='' />
      </div>

      <Button className='custom-button' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;