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
  componentDidMount: function () {
    store.bandsCollection.fetch();
    store.bandsCollection.on('update change', () => {
      this.setState({bandsCollection: store.bandsCollection.toJSON()});
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
  // let voteSort = _.sortBy(store.bandsCollection.models, function(band) {
  //   return band.get('voteCount')
  // });
  //
  // let descendingBandOrder = this.state.bands.reverse();

  let bandsVotedFor = this.state.bandsCollection.map((vote, i, arr) => {
    // console.log(vote);
    let name = vote.name;
    let imgUrl = vote.imgUrl;
    let voteCount = vote.voteCount;

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
