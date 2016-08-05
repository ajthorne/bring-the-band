import Backbone from 'backbone';
import Band from '../models/band';
import settings from '../settings';

const Bands = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appId}/votefeed`,
  //kinvey stored data
  model: Band
})

export default Bands;
