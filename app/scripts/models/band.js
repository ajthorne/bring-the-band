import Backbone from 'backbone';

const Band = Backbone.Model.extend({
  defaults: {
    name: '',
    votes: []
  }
});

export default Band;
