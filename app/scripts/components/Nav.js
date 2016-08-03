import React from 'react';
import { Link } from 'react-router';

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    )
  }
})

export default Nav;
