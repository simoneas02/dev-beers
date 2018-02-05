import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemSelected } from '../actions';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.punkapi.com/v2/beers/');
  }

  render() {
    if (this.props.hasErrored) {
      return <p className='beer-hasErrored'>Ocorreu algum erro ao carregar os itens, por favor verifique sua conexão e carregue os dados novamente!</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
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