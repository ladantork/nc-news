
import '../styleCss/Header.css'
import logo from '../assets/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({user}) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <h1 className="NC"><img src={logo} alt="NC News" className="logo" /></h1>
      <ul className="login-links">
      {!user && (
    
          <Link to="/login">Login</Link>
       
      )}
      {user && <p className="user">{user.name}</p>}
      </ul>
    </nav>
  );
}
