
import '../styleCss/Header.css'
import logo from '../assets/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({user}) {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h1 className="NC"><img src={logo} alt="NC News" className="logo" /></h1>
        <ul className="login-links">
          {!user ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li className="user">
              <p>{user.name}</p>
              <img src={user.avatar_url} alt="User Avatar" width="100" height="100"/>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
