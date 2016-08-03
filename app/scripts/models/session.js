import Backbone from 'backbone';

const Session = Backbone.Model.extend({
  defaults: {
    username: '',
    authToken: ''
  }
});

export default Session;
