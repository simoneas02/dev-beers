import React from 'react';
import GithubCorner from 'react-github-corner';

import beer from '../assets/img/beer.png';


const Header = () => (
  <header className='header'>
    <GithubCorner size={80} octoColor="#363636" bannerColor='#fffc00' href='https://github.com/simoneas02/dev-beers#readme' />
    
    <div className='header__block'>
      <h1 className='header__block__title'>Dev Beers</h1>

      <div className='header__block__text'>
        <p className='header__block__description'>Beers list with React / Redux</p>
        <img className='header__block__img' src={beer} alt='beer' />
      </div>
    </div>
  </header>
);

export default Header;