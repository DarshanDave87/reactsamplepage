import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Ftrone = () => {
  return (
    <Fragment>
      <div className='col-sm-3 mt-4 col-6'>
        <h4>Our Services</h4>
        <ul>
          <li><Link to="#">Web Development</Link></li>
          <li><Link to="#">Software Development</Link></li>
          <li><Link to="#">Ecommerce Development</Link></li>
          <li><Link to="#">App Development</Link></li>
          <li><Link to="#">Sharepoint</Link></li>
          <li><Link to="#">Microsoft Dynamics</Link></li>
          <li><Link to="#">Business Intelligence</Link></li>
          <li><Link to="#">Enterprise Mobility</Link></li>
          <li><Link to="#">Front End Development</Link></li>
          <li><Link to="#">QA Testing</Link></li>
          <li><Link to="#">AI, Robotics and Analytics</Link></li>
          <li><Link to="#">Medical Billing and Coding</Link></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Ftrone;