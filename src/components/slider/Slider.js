import React from 'react';
import './_Slider.scss';

const Slider = () => {
  let sliderArr = [1, 2, 3, 4, 5];
  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className='slide'>
            {item}
          </div>
        );
      })}
      <button className='prevBtn'>prev</button>
      <button className='nextBtn'>next</button>
    </div>
  );
};

export default Slider;
