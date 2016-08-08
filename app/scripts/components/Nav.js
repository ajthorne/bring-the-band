import React from 'react';
import { Link } from 'react-router';
import Search from './Search';
import store from '../store';

const Nav = React.createClass({
  getInitialState: function () {
    return {session: store.session.toJSON()}
  },
  updateState: function() {
    this.setState({session: store.session.toJSON()});
  },

  componentDidMount: function() {
    store.session.on('update change', this.updateState);
  },

  componentWillUnmount: function () {
    store.session.off('update change', this.updateState);
  },

  logOutHandler: function () {
    store.session.logout();
  },

  render: function () {
    // console.log(store.session.get('username'));
    //props passed from parent -- location={this.props.location.pathname}
    // console.log(this.props.location);

    let searchView;
    //shows search bar in nav if results are rendering, otherwise not shown
    if (this.props.location === '/searchresults') {
      searchView = <Search navsearch={true} />
    } else {
      searchView = ''
    }

    let navView;

    if (!store.session.get('username')) {
      navView = (
        <nav>
          {searchView}
          <img className="spotify-logo" src="../../assets/images/Spotify_Icon_CMYK_Green.png"/>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      )
    } else {
      navView = (
        <nav>
          {searchView}
          <img className="spotify-logo" src="../../assets/images/Spotify_Icon_CMYK_Green.png"/>
          <Link onClick={this.logOutHandler} to="#">Logout</Link>
          <Link to="/votes">Votes</Link>
          <Link to="/">Search</Link>
        </nav>
      )
    }

    return (
      <div>
        {navView}
      </div>
    )
  }
})

export default Nav;
