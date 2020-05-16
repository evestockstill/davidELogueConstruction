import React from 'react';
import './_Header.scss';
import image1 from '../assets/hero/kitchen1.png';
// import CarouselImage from '..//carouselImage/CarouselImage';
// import Media from 'react-media';

const Header = () => {
  return (
    <>
      <nav className='navbar'>
        hello
        <header className='header'>
          <main className='header--title'>
            <h1 className='header__title--1'>David E. Logue</h1>
            <h1 className='header__title--2'>Construction</h1>
            <img src={image1} className='hero-header' />
          </main>
        </header>
      </nav>
    </>
  );
};
export default Header;
