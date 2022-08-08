import React from 'react';
import './Navbar.css';
import Disclaimers from './Disclaimers'
import NavbarLinks from './NavbarLinks';
/* import Tab from './Tab'
 */


function Navbar() {
  return (
    <div className='Navbar'>
        <Disclaimers />
        <NavbarLinks />
        {/* <p>F.A.N.A</p>
        <Tab /> */}
    </div>
  )
}

export default Navbar