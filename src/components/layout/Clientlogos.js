import React, {Fragment} from 'react';
import Clientslogosdynamic from './Clientlogosdynamic';

const Clientlogos = () => {
  
  return (
    <Fragment>
    <h2 className="pt-4 pb-4 mt-4 mb-4">Trusted by Over 1k+ Clients</h2>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active d-flex">
          <Clientslogosdynamic />
        </div>
        <div class="carousel-item d-flex">
          <Clientslogosdynamic />
        </div>
        <div class="carousel-item d-flex">
          <Clientslogosdynamic />
        </div>
      </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon rounded-pill btn" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon rounded-pill btn" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</Fragment>
  )
}

export default Clientlogos;
