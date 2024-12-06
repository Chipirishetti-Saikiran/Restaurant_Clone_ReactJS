import React from 'react';
import './Header.css'; 
function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Restaurant Name</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
