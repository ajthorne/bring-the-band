import React from 'react';
import {Router, hashHistory, Route} from 'react-router';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import ResultsView from './components/SearchResult';
import App from './components/App';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path="/search" component={Search}/>
      <Route path="/searchresults" component={ResultsView}/>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
