import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Ftrtwo = () => {
  return (
    <Fragment>
      <div className='col-sm-3 mt-4 col-6'>
        <h4>Hire Resources</h4>
        <ul>
          <li><Link to="#">Magento Developers</Link></li>
          <li><Link to="#">IOS Developers</Link></li>
          <li><Link to="#">Python Developers</Link></li>
          <li><Link to="#">.NET Developers</Link></li>
          <li><Link to="#">PHP Developers</Link></li>
          <li><Link to="#">ODOO Developers</Link></li>
          <li><Link to="#">Typo3 Developers</Link></li>
          <li><Link to="#">Data Scientists</Link></li>
          <li><Link to="#">Frontend Developers</Link></li>
          <li><Link to="#">Android Developers</Link></li>
          <li><Link to="#">SEO & Marketing</Link></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Ftrtwo;