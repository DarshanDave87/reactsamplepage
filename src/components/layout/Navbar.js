import React, { Component } from 'react';
import logo from '../../../src/img/logo.png';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
  render() {
    document.addEventListener('mouseover', function(e){    
      if(e.target.classList.contains('nav-link')){
        e.target.classList.add('animated', 'rubberBand');
        setTimeout(function () {
          e.target.classList.remove('rubberBand');
        }, 1000);
      }
    });
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <Link class="navbar-brand" to="/"><img src={ logo } alt='Drc' /></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link className="nav-link" to="/">Company <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Web Devlopment</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">SSL Certificate</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">E-commerce</Link>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Technologies</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Hire Resources</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Our Work</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Thoughts</Link>
            </li>
            <li class="nav-item btn-dark rounded-pill">
              <Link class="nav-link btn lets-talk-btn" to="/letstalk" type='button' role='button'>Let’s Talk</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
