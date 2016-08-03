import Backbone from 'backbone';
import Band from '../models/band';

const Bands = Backbone.Collection.extend({
  url: '',
  //kinvey stored data
  model: Band
})

export default Bands;
