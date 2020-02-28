import React, { Component, Fragment } from 'react';
import clienticon from '../../img/logo.jpg';

export class Clientlogosdynamic extends Component {
  state = {
    logos: [1,2,3,4,5,6]
  }
  
  render() {
    document.addEventListener('mouseover', function(e){    
      if(e.target.classList.contains('img-ani')){
        e.target.classList.add('animated', 'pulse');
        setTimeout(function () {
          e.target.classList.remove('pulse');
        }, 1000);
      }
    });
    return (
      <Fragment>
      { this.state.logos.map( product => (
        <div className="col-sm-3 col-6 pb-4 col-md-2">
          <img src={ clienticon } className="img-ani d-block w-100 shadow-sm p-4 border-custom" alt="..." />
        </div>
      ))}
      </Fragment>
    )
  }
}

export default Clientlogosdynamic
