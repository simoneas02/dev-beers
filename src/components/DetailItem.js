import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import close from '../assets/icon/close.svg';

class DetailItem extends Component {

  render() {
    
    if(!this.props.item) return null;
    
    return(
      <div className='beer-detail'>
        <Link to='/'>
          <button className='beer-detail__btn'>
            Voltar
          </button>
        </Link>
        <img className='beer-detail__img' src={this.props.item.image_url} alt={this.props.item.name} />

        <div className='beer-detail__block'>
          <h3 className='beer-detail__name'>{this.props.item.name}</h3>
          <span className='beer-detail__tagline'>{this.props.item.tagline}</span>
          <p className='beer-detail__description'>{this.props.item.description}</p>
        </div>
      </div>
      
    );
  }

}

const mapStateToProps = state => {
  return { item: state.itemSelected }
}

export default connect(mapStateToProps)(DetailItem);