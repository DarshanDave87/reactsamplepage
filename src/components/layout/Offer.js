import React, { Component } from 'react';
import Product from './Product';

export class Offer extends Component {
  state = {
    products: [1,2,3,4,5,6,7,8,9,10,11,12]
  }
  render() {    
    
    return (
      <section className="offer container-fluid text-center mt-4">
        <h2 className='pt-4 pb-4 mt-4 mb-4'>We Offer the full range <br />of quality services</h2>
        <div className="container-fluid pt-4">
          <div className="row">
          {this.state.products.map( product => (
            <Product />
          ))}
          
          </div>
        </div>
      </section>
    )
  }
}

export default Offer
