import Backbone from 'backbone';

const SearchResult = Backbone.Model.extend({
  urlRoot: 'https://api.spotify.com/v1/search',
  //data returned from spotify api
  // defaults: {
  //   name: '',
  //   type: '',
  //   url: ''
  // }
})

export default SearchResult;
