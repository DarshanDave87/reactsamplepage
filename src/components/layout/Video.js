import React, { Component } from 'react';
import videoimg from '../../img/video.jpg';

export class Video extends Component {
  render() {
    return (
      <section className='col-lg-6 text-center'>
        <img src={ videoimg } alt='Video' className='img-fluid'/>
      </section>
    )
  }
}

export default Video
