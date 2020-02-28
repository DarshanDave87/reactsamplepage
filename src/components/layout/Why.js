import React, { Component } from 'react';
import { Link } from 'react-router-dom';  

export class Why extends Component {
  render() {
    
    return (
      <section class="d-flex why col-lg-6">
        <div className="why-cnt animated infinite">
          <h2>WHY drc systems?</h2>
          <h4 className="why-sub-tlt">Creating thoughtful solutions for your technology challenges</h4>
          <div className="why-cnt-sub">Successful products require a mix of strategy, technical, creative and management skills. Our services have been designed for any stage of the product development cycle.</div>
          <div className="why-cnt-sub">Successful products require a mix of strategy, technical, creative and management skills. Our services have been designed for any stage of the product development cycle.</div>
          <div className="text-center mt-4 mb-4"><Link class="mb-4 mt-4 rounded-pill btn btn-talk pt-2 pb-2 pl-4 pr-4" to="#" role="button">Let’s Talk</Link></div>
        </div>
        <div className="why-cnt-number">
        <h2 className="mt-4 text-center text-sm-left text-lg-left">what we’ve done</h2>
        </div>
        <div className="why-cnt-blue container-fluid align-selt-flex-end text-center pb-4 pt-4">
          <div className="row" id='counter'>
            <div className="col-sm"><h1 className="counter-value" data-count="300">0</h1><h4>projects done</h4></div>
            <div className="col-sm active container"><h1 className="counter-value" data-count="2">0</h1><h4>happy clients</h4></div>
            <div className="col-sm"><h1 className="counter-value" data-count="10">0</h1><h4>years running</h4></div>
          </div>
        </div>
        
      </section>
    )
  }
}

export default Why
