import React, { useState } from 'react';
import './_Slider.scss';
import SliderImg from './SliderImg';
import img1 from '../assets/hero/kitchen1.png';
import img2 from '../assets/hero/bathroom1.png';
import img3 from '../assets/hero/deck1.png';

const Slider = () => {
  let sliderArr = [
    // 1, 2, 3
    <SliderImg src={img1} />,
    <SliderImg src={img2} />,
    <SliderImg src={img3} />
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
