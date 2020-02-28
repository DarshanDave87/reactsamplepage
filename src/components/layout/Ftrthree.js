import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Ftrthree = () => {
  return (
    <Fragment>
      <div className='col-sm-3 mt-4 col-6'>
        <h4>Technologies</h4>
        <ul>
          <li><Link to="#">.NET Microsoft</Link></li>
          <li><Link to="#">Java</Link></li>
          <li><Link to="#">SAP</Link></li>
          <li><Link to="#">Mobile</Link></li>
          <li><Link to="#">PHP</Link></li>
          <li><Link to="#">Angular JS</Link></li>
          <li><Link to="#">Node. JS</Link></li>
          <li><Link to="#">MongoDB</Link></li>
          <li><Link to="#">ROR</Link></li>
          <li><Link to="#">Block Chain</Link></li>
          <li><Link to="#">Python</Link></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Ftrthree;