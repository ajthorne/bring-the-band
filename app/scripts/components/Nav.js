import React from 'react';
import { Link } from 'react-router';
import Search from './Search';

const Nav = React.createClass({
  render: function () {
    //props passed from parent -- location={this.props.location.pathname}
    // console.log(this.props.location);

    let searchView;
    //shows search bar in nav if results are rendering, otherwise not shown
    if (this.props.location === '/searchresults') {
      searchView = <Search />
    } else {
      searchView = ''
    }

    return (
      <nav>
        {searchView}
        <Link to="/login">Login</Link>
      </nav>
    )
  }
})

export default Nav;
