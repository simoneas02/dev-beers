import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import close from '../assets/icon/close.svg';

class DetailItem extends Component {

  render() {
    
    if(!this.props.item) return null;
    
    return(
      <div>
        <Link to='/'>
          <button>
            <img src={close} alt='close' />
          </button>
        </Link>
        <img src={this.props.item.image_url} alt={this.props.item.name} />
        <h3>{this.props.item.name}</h3>
        <span>{this.props.item.tagline}</span>
        <p>{this.props.item.description}</p>
      </div>
      
    );
  }

}

const mapStateToProps = state => {
  return { item: state.itemSelected }
}

export default connect(mapStateToProps)(DetailItem);