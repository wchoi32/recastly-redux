import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
// var SearchContainer = () => {};
const mapStateToProps = state => {
  return { handleSearchChange(state) }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(handleSearchChange)
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
