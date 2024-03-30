import React,{useState} from 'react'
import { FaRegUser } from "react-icons/fa";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  
  return (
    <header className="header" data-header>
    <div className="container">
      <div className={`overlay ${isActive ? 'active' : ''}`} data-overlay onClick={toggleNav}></div>
      <a href="/" className="logo">
        <h3>Rent Car</h3>
      </a>
      <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
        <ul className="navbar-list">
          <li><a href="/" className="navbar-link" onClick={toggleNav}>Home</a></li>
          <li><a href="#featured-car" className="navbar-link" onClick={toggleNav}>Explore cars</a></li>
          <li><a href="#" className="navbar-link" onClick={toggleNav}>About us</a></li>
          <li><a href="/packages" className="navbar-link" onClick={toggleNav}>Packages</a></li>
          <li>
              <a href="/signin" className="navbar-link" onClick={toggleNav}>
                Sign In
              </a>
            </li>
            <li>
              <a href="/login" className="navbar-link" onClick={toggleNav}>
                Login
              </a>
            </li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="header-contact">
          <a href="tel:88002345678" className="contact-link">phone no</a>
          <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
        </div>
        <a href="#" className="btn user-btn" aria-label="Profile">
        <FaRegUser/>
        </a>
        <button className={`nav-toggle-btn ${isActive ? 'active' : ''}`} onClick={toggleNav} aria-label="Toggle Menu">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header