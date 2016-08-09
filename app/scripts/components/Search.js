import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Search = React.createClass({
  searchHandler: function (e) {
    e.preventDefault();
    let band = this.refs.name.value;
    console.log('Your search:', band);
    store.searchCollection.fetch(
      {
        data: {
        q: band,
        type: 'artist'
      },
      success: function (response) {
        // console.log(response);
        hashHistory.push('/searchresults');
      }
    }
    );
  },
  render: function () {
    // console.log(this.props.navsearch);
    let searchClass;
    if (this.props.navsearch === true) {
      searchClass = "nav-search"
    } else {
      searchClass = "search-box"
    }
    return (
          <form className={searchClass} onSubmit={this.searchHandler}>
            <input className="search-input" type="text" placeholder="Search" ref="name"/>
            <input className="search-btn" type="submit" value="Search"/>
          </form>
    )
  }
});

export default Search;
