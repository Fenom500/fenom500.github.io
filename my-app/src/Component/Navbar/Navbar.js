import React from 'react';
import './Navbar.css';
import Disclaimers from './Disclaimers'
import Tabs from './Tabs'


function Navbar() {
  return (
    <div className='Navbar'>
        <Disclaimers />
        <p className='CompName'>F.A.N.A</p>
        <Tabs />
    </div>
  )
}

export default Navbar