import Backbone from 'backbone';
import $ from 'jquery';
import settings from '../settings';
import { hashHistory } from 'react-router';

const Session = Backbone.Model.extend({
  defaults: {
    id: '',
    name: '',
    username: '',
    authToken: ''
  },
  login: function (data) {
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appId}/login`,
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
      .then((response) => {
        // console.log(response);
        this.set({
          username: response.username, authtoken: response._kmd.authtoken, id: response._id
        });
      })
      .fail((error) => {
        console.error('Your data wasn\'t passed through')
      })
  },
  signup: function (data) {
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appId}`,
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
      .then((response) => {
        this.set({
          username: response.username, authtoken: response._kmd.authtoken, id: response._id, name: response.name
        });
      })
      .fail((error) => {
        console.error('Your data wasn\'t passed through')
      })
  }
});

export default Session;
