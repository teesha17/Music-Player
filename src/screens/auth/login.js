import React from 'react';
import { loginEndpoint } from '../../spotify';
import "./login.css";
export default function Login() {
    console.log("log in page");
  return (
   
    <div className='login-page'>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/800px-Spotify_App_Logo.svg.png"
        alt="logo-spotify"
        className='logo'
        />
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
        </a>
    </div>
  );
}
