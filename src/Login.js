import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './nav.css';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="log"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
