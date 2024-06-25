import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from './Logo';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <Link to="/" className={`brand ${isScrolled ? 'scrolled' : ''}`}>
      {!isScrolled ? <Logo /> : <span className="text">Sonya Studio</span>}
    </Link>
    <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
      </li>
    </ul>
  </nav>

  );
}

export default Navbar;
