import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Ftrfour = () => {
  return (
    <Fragment>
      <div className='col-sm-3 mt-4 col-6'>
        <h4>Find us by</h4>
        <ul>
          <li className='address'>Lorem Ipsume doller site amet</li>
          <li className='call'>20 123 456 7890</li>
          <li className='mail'><Link to="mailto:info@drcsystems.com">info@drcsystems.com</Link></li>
        </ul>
        <h4>About Us</h4>
        <ul>
          <li><Link to="#">Investors Relations</Link></li>
          <li><Link to="#">Partnership</Link></li>
          <li><Link to="#">Social Responsibility</Link></li>
          <li><Link to="#">Culture</Link></li>
          <li><Link to="#">Events</Link></li>
          <li><Link to="#">Trade Shows</Link></li>
          <li><Link to="#">Careers</Link></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Ftrfour;