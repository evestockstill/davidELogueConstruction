/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const SliderImg = ({ src }) => {
  let heroImages = {
    width: 100 + '%',
    height: 'auto',
  };
  return <img src={src} alt='construction-image-slider' style={heroImages}></img>;
};
export default SliderImg;



