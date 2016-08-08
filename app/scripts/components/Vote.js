//i need to display results from kinvey Collection
//stored in bands collection

import React from 'react';
import store from '../store';
import SingleVote from './SingleVote';
import _ from 'underscore';

const VotesView = React.createClass({
  getInitialState: function () {
    return {
      bandsCollection: store.bandsCollection.toJSON()
    }
  },
  componentWillMount: function () {
    store.bandsCollection.fetch();
    store.bandsCollection.on('update change', () => {
      this.setState({bandsCollection: store.bandsCollection.toJSON()
      });
    })
  },
  componentWillUnmount: function () {
    store.bandsCollection.off('update change', () => {
      this.setState({bandsCollection: store.bandsCollection.toJSON()
      });
    })
  },
render: function () {
  //setting up props to pass down to child

  let bandsVotedFor = store.bandsCollection.map((vote, i, arr) => {
    // console.log(vote);
    let name = vote.get('name');
    let imgUrl = vote.get('imgUrl');
    let voteCount = vote.get('voteCount');
    // console.log(_.sortBy(vote, 'voteCount'));

    return <SingleVote key={i} name={name} imgUrl={imgUrl} voteCount={voteCount}/>

  })
  return (
      <div className="vote-container">
        <h2>Votes</h2>
        <ul className="vote-list-holder">
          {bandsVotedFor}
        </ul>
      </div>
    )
  }
});

export default VotesView
