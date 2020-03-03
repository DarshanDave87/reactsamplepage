import React, {Fragment} from 'react';
import Clientslogosdynamic from './Clientlogosdynamic';

const Clientlogos = () => {
  
  return (
    <Fragment>
    <h2 className="pt-4 pb-4 mt-4 mb-4">Trusted by Over 1k+ Clients</h2>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active d-flex">
          <Clientslogosdynamic />
        </div>
        <div className="carousel-item d-flex">
          <Clientslogosdynamic />
        </div>
        <div className="carousel-item d-flex">
          <Clientslogosdynamic />
        </div>
      </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon rounded-pill btn" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon rounded-pill btn" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</Fragment>
  )
}

export default Clientlogos;
