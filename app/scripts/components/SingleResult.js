// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';
import store from '../store';

const SingleResult = React.createClass({
  voteHandler: function () {

    console.log('You voted for me. You\'re so sweet!');
    let id = this.props.id
    let name = this.props.name

    store.bandsCollection.fetch({success: () => {
      // console.log(id);
      // console.log(store.bandsCollection);
    let model = store.bandsCollection.where({id: id})[0];
    // console.log(model);

    let votes = model.get('votes')
    console.log(votes);
    }});

    // let votes = model.get('votes')
    // console.log(votes);

    //does band already exist in my collection store.bandsCollection.get(id)
    //if not create a new band
    //get specific band id

    //vote for band with votes and votecount function

    // store.bandsCollection.create({
    //   id: id,
    //   name: name,
    //   // votes: votes.push(store.session.get('username')),
    //   // voteCount: store.band.voteCount()
    // }, {
    //   success: function (response) {
    //   console.log(response);
    //   // console.log(store.band.get('voteCount'));
    // }
    // })

    // console.log('username:', store.session.get('username'));
    // console.log('votes:', store.bandsCollection.get('votes'));
    //I need to push() the data to the array

  },
  render: function () {
    return (
      <li className="single-result-container">
      <img className="single-result-img" src={`${this.props.imgUrl}`}/>
      <span className="single-result-name">{this.props.name}</span>
      <input className="vote-btn" onClick={this.voteHandler} type="button" value="Vote for me!"/>
      </li>
    )
  }
})

export default SingleResult;

//I need to render this differently for the vote page without the vote input button.
//maybe pass the location from parent down or something else?
