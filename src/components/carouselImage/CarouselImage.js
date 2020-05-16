import React from 'react';
import Carousel from '../carousel/Carousel';
import image1 from '../assets/hero/bathroom.jpeg';
// import image2 from '../assets/hero/deck.jpeg';
// import image3 from '../assets/hero/kitchen.png';

const CarouselImage = () => {
  return (
    <Carousel>
      <div>
        {/* <img src={image3} />
        <img src={image2} /> */}
        <img src={image1} />
      </div>
    </Carousel>
  );
};
export default CarouselImage;
