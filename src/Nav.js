import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='/e3cbd452-f215-466b-acdf-a09787d477f2_200x200 (1).png'
        alt='Netflix Logo'
      />
      <h2 className='nav_avatar'>Trailer Flix</h2>
    </div>
  );
}

export default Nav;
