import React, { Component } from 'react';
import Navbar from './Navbar';

export class Header extends Component {
  render() {
    return (
      <header className='w-100'>
        <Navbar />
      </header>
    )
  }
}

export default Header
