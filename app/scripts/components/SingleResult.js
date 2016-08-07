// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';
import store from '../store';

const SingleResult = React.createClass({
  voteHandler: function () {

    console.log('You voted for me. You\'re so sweet!');
    let id = this.props.id
    let name = this.props.name
    let imgUrl = this.props.imgUrl
    // console.log(this.props);

    store.bandsCollection.fetch({success: () => {
      // console.log(id);
      // console.log(store.bandsCollection);
    let model = store.bandsCollection.where({id: id})[0];
    // console.log(model);
    // console.log(votes);

    if (!model) {
      store.bandsCollection.create({
        id: id,
        name: name,
        imgUrl: imgUrl
      },
      {
          success: (band) => {
              console.log(band)
              {
                votes: band.save('votes', band.get('votes').concat(store.session.get('username')));
                voteCount: band.save('voteCount', band.voteCount())
               }
             }
      })
      } else {
        let votes = model.get('votes');
        console.log(votes);
        model.save('votes', votes.concat(store.session.get('username')))
        model.save('voteCount', model.get('voteCount') + 1)
      }
    }
  });

    // console.log('username:', store.session.get('username'));
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
