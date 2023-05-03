import React from 'react';
import { slider_img_1 } from '../../utils/images';
import './Slider.scss';

const Slider = () => {
  return (
    <div className='hero-slider'>
      <div className='hero-slider-item'>
        <img src={slider_img_1} alt='slider1' />
      </div>
    </div>
  );
};

export default Slider;
