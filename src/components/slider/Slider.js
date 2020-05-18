import React, { useState } from 'react';
import './_Slider.scss';

const Slider = () => {
  let sliderArr = [1, 2, 3, 4, 5];

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
