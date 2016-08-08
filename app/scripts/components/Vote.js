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
    store.bandsCollection.fetch({
      success: function (response) {
        // console.log(response.models);
        // console.log(_.sortBy(response.models, 'name'));
      }
    });
    store.bandsCollection.on('update change', () => {
      this.setState({bandsCollection: store.bandsCollection.toJSON()});
      // console.log(_.sortBy(this.state, 'voteCount'));
      });

    },
  componentWillUnmount: function () {
    store.bandsCollection.off('update change', () => {
      this.setState({bandsCollection: store.bandsCollection.toJSON()
      });
    })
  },
render: function () {
  //setting up props to pass down to child
  // console.log(store.bandsCollection);
  let voteSort = _.sortBy(store.bandsCollection.models, function(band) {
    return band.get('voteCount')
  });

  let descendingBandOrder = voteSort.reverse();

  let bandsVotedFor = descendingBandOrder.map((vote, i, arr) => {
    // console.log(vote);
    let name = vote.get('name');
    let imgUrl = vote.get('imgUrl');
    let voteCount = vote.get('voteCount');

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
