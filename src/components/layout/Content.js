import React, { Component } from 'react';
import Talk from './Talk';
import Video from './Video';
import Questionmark from './Questionmark';
import Why from './Why';
import Offer from './Offer';
import Clients from './Clients';
import Form from './Form';

export class Content extends Component {
  render() {
    
    return (
      <main className='w-100'>
        <div className='row no-gutters'>
          <Talk />
          <Video />
          <Questionmark />
          <Why />
          <Offer />
          <Clients />
          <Form />
        </div>
      </main>
    )
  }
}

export default Content
