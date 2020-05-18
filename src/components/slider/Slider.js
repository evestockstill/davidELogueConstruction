/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './_Slider.scss';
import SliderImg from './SliderImg';
// import img1 from 'https://ik.imagekit.io/j5m10vikgh/deck1_m1ems6SSz.png';
// import img2 from '../assets/hero/bathroom.png';
// import img3 from '../assets/hero/deck.png';


const Slider = () => {
  let sliderArr = [
    <SliderImg src='https://ik.imagekit.io/j5m10vikgh/deck1_m1ems6SSz.png'/>,
    <SliderImg src='https://ik.imagekit.io/j5m10vikgh/kitchen1_Mbx4OAgDG.png'/>,
    <SliderImg src='https://ik.imagekit.io/j5m10vikgh/bathroom1_APVNsOz9a.png' />
  ];
  const [x, setX] = useState(0);
  
  const handlePrev = () => {
    x === 0 ? setX(-100 * sliderArr.length - 1) : setX(x + 100);
  };
  const handleNext = () => {
    x === -100 * (sliderArr.length - 1) ?  setX(0) : setX(x - 100);
  };
  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className='prevBtn' onClick={handlePrev}>
        prev
      </button>
      <button className='nextBtn' onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Slider;
