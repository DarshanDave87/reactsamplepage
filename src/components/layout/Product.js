import React, { Component } from 'react';
import offer from '../../img/offer_icon.jpg';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    document.addEventListener('mouseover', function(e){    
      if(e.target.classList.contains('box-animation')){
        e.target.classList.add('animated', 'tada');
        setTimeout(function () {
          e.target.classList.remove('tada');
        }, 1000);
      }
    });
    return (
      <div className="col-sm-6 col-lg-4 col-xl-2 mb-4">
        <div className="card shadow-sm box-animation">
          <img src={offer} className="rounded mx-auto d-block mt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">We can develop custom software to streamline and automate your business processes. We adopt agile evelopment methodology.</p>
            <Link to="#" className="card-link">learn more</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
