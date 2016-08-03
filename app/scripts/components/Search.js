import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Search = React.createClass({
  searchHandler: function (e) {
    e.preventDefault();
    let band = this.refs.name.value;
    console.log(band);
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
    return (
      <form className="search-box" onSubmit={this.searchHandler}>
        <input type="text" placeholder="Search" ref="name"/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
});

export default Search;
