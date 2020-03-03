import React, { Component } from 'react';
import questiongif from '../../img/quelight.gif';

export class Questionmark extends Component {
  render() {
    
    return (
      <section className="align-items-center d-flex que text-center col-lg-6 p-4 wow fadeIn">
        <img src={questiongif} alt="Google Web Designer" className="img-fluid mx-auto m-3" />
      </section>
    )
  }
}

export default Questionmark
