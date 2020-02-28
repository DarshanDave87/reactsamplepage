import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Talk extends Component {

  render() {
    document.addEventListener('click', function(e){    
      if(e.target.classList.contains('btn')){
        e.target.classList.add('animated', 'zoomIn');
        setTimeout(function () {
          e.target.classList.remove('zoomIn');
        }, 1000);
      }
    });

    return (
      <section className='align-items-center d-flex talk text-center col-lg-6'>
        <h1 className="mx-auto"><br />Build your own Team or <br />Hire us for a Project
        <div className="talk-cnt mt-2">Holistic digital solutions to develop <br />a high-performance enterprise</div>
        <div id='animationSandbox' className='infinite'><Link className="rounded-pill btn btn-talk pt-2 pb-2 pl-4 pr-4 mt-4" to="#" role="button">Let’s Talk</Link></div>
        </h1>
        <Link to="#" className="down-arrow">
        <i className="fa fa-long-arrow-down animated infinite bounceInDown delay-2s" aria-hidden="true"></i>
        </Link>
        <script>
          
        </script>
      </section>
    )
  }
}

export default Talk
