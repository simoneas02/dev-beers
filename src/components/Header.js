import React from 'react';
import GithubCorner from 'react-github-corner';

import beer from '../assets/img/beer.png';


const Header = () => (
  <header className='header'>
    <GithubCorner size={80} bannerColor='var(--primary-color)' href='https://github.com/simoneas02/beta-contrata#readme' />
    
    <div className='header__block'>
      <h1 className='header__block__title'>Dev Beers</h1>
      <p className='header__block__description'>Beers list with React/Redux</p>
      <img className='header__block__img' src={beer} alt='beer' />
    </div>
  </header>
);

export default Header;