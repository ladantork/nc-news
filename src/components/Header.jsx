
import '../styleCss/Header.css'
import logo from '../assets/logo.png'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <h1 className="NC"><img src={logo} alt="NC News" className="logo" /></h1>
      <p className="describe">  
      </p>
      <p className="user">Username</p>
      
    </nav>
  );
}
