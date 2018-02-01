import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailItem extends Component {

  render() {

    if(!this.props.item) {
      return <p>Selecione um item para iniciar!</p>;
    }

    return(
      <div>
        <h3>{this.props.item.name}</h3>
        <span>{this.props.item.tagline}</span>
        <p>{this.props.item.description}</p>
        <img src={this.props.item.image_url} alt={this.props.item.name} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { item: state.itemSelected }
}

export default connect(mapStateToProps)(DetailItem);