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

        localStorage.setItem("authtoken", response._kmd.authtoken);
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
  },
  retrieve: function () {
    this.fetch({
      url: `https://baas.kinvey.com/user/${settings.appId}/_me`,
      success: () => {
        console.log('you got your authtoken:', localStorage.getItem('authtoken'));
        localStorage.getItem("authtoken")
        },
      error: function(e) {
        console.log(e);
      }
    });
  },
  logout: function () {
    $.ajax(null, {
      url: `https://baas.kinvey.com/user/${settings.appId}/_logout`,
    })
    .then((response) => {
      this.clear();
      hashHistory.push('/');
      localStorage.clear();
      console.log('You are logged out. Goodbye!');
    })
    .fail((error) => {
      console.error('Failed to log out!')
      console.log(error);
    })
  }
});
export default Session;

//to-do
//build local storage
