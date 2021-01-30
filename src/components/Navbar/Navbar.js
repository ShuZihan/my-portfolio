import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Container from '../Container/Container';
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    }
    if (window.pageYOffset <= 0) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  //render
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container></Container>
    </div>
  );
}

export default Navbar;
