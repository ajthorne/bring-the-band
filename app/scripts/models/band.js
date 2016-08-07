import Backbone from 'backbone';
import settings from '../settings';


const Band = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/votefeed`,
  idAttribute: '_id',
  defaults: {
    id: '',
    name: '',
    imgUrl: '',
    votes: []
  },
  voteCount: function () {
    return this.get('votes').length
  }
});

export default Band;
