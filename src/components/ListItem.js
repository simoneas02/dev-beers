import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemSelected } from '../actions';

class ListItem extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.punkapi.com/v2/beers/');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Ocorreu algum erro ao carregar os itens, por favor verifique sua conexão e carregue os dados novamente!</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map((item) => (
          <li 
            key={item.id}
            onClick= { () => this.props.selected(item) }
          >
            <span>{item.name}</span>
            <span>{item.tagline}</span>
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