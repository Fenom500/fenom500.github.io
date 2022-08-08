import React from 'react';
import './Navbar.css';
import Disclaimers from './Disclaimers'
import NavbarLinks from './NavbarLinks';

function Navbar() {
  return (
    <div className='Navbar'>
        <Disclaimers />
        <NavbarLinks />
    </div>
  )
}

export default Navbar