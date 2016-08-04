import React from 'react';
import Nav from './Nav';
import Search from './Search';
import ResultsView from './SearchResult';

const App = React.createClass({
  render: function () {
    // console.log(this.props.location.pathname);
    return (
      <div className="main-content">
      <Nav location={this.props.location.pathname} />
      {this.props.children}
      </div>
    )
  }
})

export default App;
