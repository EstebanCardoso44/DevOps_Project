// src/components/Navbar.js
import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'; // Si tu utilises React Router

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
