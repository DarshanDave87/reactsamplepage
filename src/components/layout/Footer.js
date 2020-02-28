import React, { Component } from 'react'
import Ftrone from './Ftrone';
import Ftrtwo from './Ftrtwo';
import Ftrthree from './Ftrthree';
import Ftrfour from './Ftrfour';
import Ftrbtm from './Ftrbtm';

export class Footer extends Component {
  render() {
    document.addEventListener('mouseover', function(e){    
      if(e.target.classList.contains('fa')){
        e.target.classList.add('animated', 'fadeInDown');
        setTimeout(function () {
          e.target.classList.remove('fadeInDown');
        }, 1000);
      }
    });
    

    return (
      <footer className="footer container-fluid pt-4">
        <div className='row mx-auto'>
          <Ftrone />
          <Ftrtwo />
          <Ftrthree />
          <Ftrfour />
          <Ftrbtm />
        </div>
      </footer>
    )
  }
}

export default Footer
