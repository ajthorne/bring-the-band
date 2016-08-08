import React from 'react';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import ResultsView from './components/SearchResult';
import App from './components/App';
import store from './store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import $ from 'jquery';
import settings from './settings';
import VotesView from './components/Vote';


$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (jqueryAjax.url.indexOf('spotify') === -1) {
  if (store.session.get('authtoken')) {
    //if authtoken exists
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + store.session.get('authtoken'));
    //Authorization pulls authtoken for that user from response
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.baseAuth);
    //authorization needs user to login or sign up to get authtoken
  }
}
});

// if (localStorage.authtoken) {
//   store.session.retrieve();
// }

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <IndexRoute component={Search}/>
      <Route path="/searchresults" component={ResultsView}/>
      <Route path="/votes" component={VotesView}/>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
