import React, { Component } from 'react'
import Tab from './Tab'
import Logo from './Logo'
import './NavbarLinks.css'

export default class NavbarLinks extends Component {
  render() {
    return (
        <div className='NavContainer'>
            <Logo />
            <Tab />
        </div>
    )
  }
}
