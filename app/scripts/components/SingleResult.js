// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';

const SingleResult = React.createClass({
  voteHandler: function () {
    console.log('You voted for me. You\'re so sweet!');
    console.log(this.props.id);
    
  },
  render: function () {
    return (
      <li className="single-result-container">
      <img className="single-result-img" src={`${this.props.imgUrl}`}/>
      <span className="single-result-name">{this.props.name}</span>
      <input onClick={this.voteHandler} type="button" value="Vote for me!"/>
      </li>
    )
  }
})

export default SingleResult;

//I need to render this differently for the vote page without the vote input button.
//maybe pass the location from parent down or something else?
