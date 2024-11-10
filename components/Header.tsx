"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Portfolio</div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#certificate">Certificate</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#certificate" onClick={toggleMenu}>Certificate</Link></li>
            <li><Link href="#experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
