'use client';
import { useState } from 'react';
import '../styles/navbar.css';
import '../styles/responsive.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <img src="/images/logo.png" alt="Logo" className="nav-logo" />
      <div className="navbar-rounded">
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About ▾</a>
          <a href="/services">Services</a>
          <a href="/ourwork">Our Work</a>
          <a href="/blog">Blog</a>
          <button className="expert-button">Speak to an Expert</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import '../styles/navbar.css';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <>
//       <div className="navbar-wrapper">
//         <div className="navbar-rounded">
//           <img src="/images/logo.png" alt="Logo" className="nav-logo" />

//           <div className="nav-links">
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <Link href="/ourwork">Our Work</Link>
//             <Link href="/services">Services</Link>
//             <Link href="/blog">Blog</Link>
//           </div>

//           <button className="expert-button">Let's Talk</button>

//           {/* Hamburger Icon */}
//           <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       <div className={`mobile-nav ${isOpen ? 'show' : ''}`}>
//         <Link href="/" onClick={closeMenu}>Home</Link>
//         <Link href="/about" onClick={closeMenu}>About</Link>
//         <Link href="/ourwork" onClick={closeMenu}>Our Work</Link>
//         <Link href="/services" onClick={closeMenu}>Services</Link>
//         <Link href="/blog" onClick={closeMenu}>Blog</Link>
//         <button className="expert-button">Let's Talk</button>
//       </div>
//     </>
//   );
// }