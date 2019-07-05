import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Autosuggest from 'react-autosuggest';


class LocalSearch extends Component {

  state = { searchString: '' }
  handleChange = (e) => {
    this.setState({ searchString:e.target.value });
  }

  render(){
    var libraries = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
    }

    return(
      <div>
        
      </div>
    )
  }
}


export default LocalSearch;
