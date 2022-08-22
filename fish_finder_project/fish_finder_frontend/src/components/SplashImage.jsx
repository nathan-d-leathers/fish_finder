import React from 'react';
import splash from '../assets/splashImage.jpg'
import Heading from './Heading';


function SplashImage() {
  return (
    <div className='bg-image'>
      <img src={splash} className='img-fluid' alt='splash' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <Heading />
      </div>
    </div>
  );
}

export default SplashImage