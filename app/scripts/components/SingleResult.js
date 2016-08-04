// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';

const SingleResult = React.createClass({
  render: function () {
    return (
      <li className="single-result-container">
      <img className="single-result-img" src={`${this.props.imgUrl}`}/>
      <span className="single-result-name">{this.props.name}</span>
      </li>
    )
  }
})

export default SingleResult;
