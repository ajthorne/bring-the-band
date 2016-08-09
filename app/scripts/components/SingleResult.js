// returned props from parent --
// id={bandId} name={bandName} imgUrl={bandImg}

import React from 'react';
import store from '../store';

const SingleResult = React.createClass({
  voteHandler: function () {
    // store.bandsCollection.voteFor();
    //
    // if (store.session.get('username')) {
    //   console.log('Sorry... you already voted for this band!');
    // } else {

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

              band.set({
                votes: band.get('votes').concat(store.session.get('username')),
              });

              band.save({
                voteCount: band.voteCount()
              });
          }
      })
    } else {
        let votes = model.get('votes');
        console.log(votes);
        model.set('votes', votes.concat(store.session.get('username')))
        model.save({voteCount: model.get('voteCount') + 1})
      }
    }
  });
  // }
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
