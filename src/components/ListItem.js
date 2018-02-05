import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemSelected } from '../actions';
import { Link } from 'react-router-dom';

import loading from '../assets/icon/loading.svg';
import beerFail from '../assets/img/beer-fail.jpg';

class ListItem extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.punkapi.com/v2/beers/');
  }

  render() {
    if (this.props.hasErrored) {
      return(
        <div className='beer-list-has-errored'>
          <img className='beer-list-has-errored__img' src={beerFail} alt='beer' />
          <p className='beer-list-has-errored__text'>Ocorreu algum erro ao carregar os itens, por favor verifique sua conexão e tente acessar nossa página novamente!!!</p>;
        </div>
      )
    }

    if (this.props.isLoading) {
      return(
        <div className='beer-list-loading'>
          <img className='beer-list-loading__img' src={loading} alt='loading' />
          <p className='beer-list-loading__text'>Carregando...</p>
        </div>
      )
    }

    return (
      <ul className='beer-list'>
        {this.props.items.map((item) => (
          <li 
          className='beer-list__item'
            key={item.id}
            onClick= { () => this.props.selected(item) }
          >
            <Link className='beer-list__item__link' to='/detail-item'>
              <span className='beer-list__item__link__name'>{item.name}</span>
              <span className='beer-list__item__link__tagline'>{item.tagline}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    selected: item => dispatch(itemSelected(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);