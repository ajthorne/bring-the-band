import Backbone from 'backbone';
import SearchResult from '../models/searchresult';

const SearchResults = Backbone.Collection.extend({
  url: 'https://api.spotify.com/v1/search',
  //data returned from spotify api
  model: SearchResult,

  parse: function(response) {
  //parses through response to store data as specified
    if (response) {
      return response.artists.items
      //return an array
    }
  }
})

export default SearchResults;
