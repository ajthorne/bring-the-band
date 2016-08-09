// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';
import store from '../store';

const SingleResult = React.createClass({
  voteHandler: function () {
    store.bandsCollection.voteFor(this.props);
  },
  render: function () {
    // let voteView;
    //
    // // if (store.bandsCollection.get('votes').indexOf(store.session.get('username')) === 1) {
    // //   voteView = (
    // //     <li className="single-result-container">
    // //     <img className="single-result-img" src={`${this.props.imgUrl}`}/>
    // //     <p className="single-result-name">{this.props.name}</p>
    // //     <input className="vote-btn" type="button" value="Voted"/>
    // //     </li>
    // //   )
    // // } else {
    //   voteView = (
    //     <li className="single-result-container">
    //     <img className="single-result-img" src={`${this.props.imgUrl}`}/>
    //     <p className="single-result-name">{this.props.name}</p>
    //     <input className="vote-btn" onClick={this.voteHandler} type="button" value="Vote for me!"/>
    //     </li>
    //   )
    // }

    return (
          <li className="single-result-container">
          <img className="single-result-img" src={`${this.props.imgUrl}`}/>
          <p className="single-result-name">{this.props.name}</p>
          <input className="vote-btn" onClick={this.voteHandler} type="button" value="Vote for me!"/>
          </li>
    )
  }
})

export default SingleResult;
