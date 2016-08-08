import Backbone from 'backbone';
import Band from '../models/band';
import settings from '../settings';
import store from '../store';

const Bands = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appId}/votefeed`,
  //kinvey stored data
  model: Band,

  comparator: function(band) {
    return band.get('voteCount') * -1
  },

  // voteFor: function () {
  //   // if (store.session.get('username')) {
  //   //   console.log('Sorry... you already voted for this band!');
  //   // } else {
  //
  //   console.log('You voted for me. You\'re so sweet!');
  //   let id = this.props.id
  //   let name = this.props.name
  //   let imgUrl = this.props.imgUrl
  //   // console.log(this.props);
  //
  //   this.fetch({success: () => {
  //     // console.log(id);
  //     // console.log(store.bandsCollection);
  //   let model = this.where({id: id})[0];
  //   // console.log(model);
  //   // console.log(votes);
  //
  //   if (!model) {
  //     this.create({
  //       id: id,
  //       name: name,
  //       imgUrl: imgUrl
  //     },
  //     {
  //         success: (band) => {
  //
  //             band.set({
  //               votes: band.get('votes').concat(store.session.get('username')),
  //             });
  //
  //             band.save({
  //               voteCount: band.voteCount()
  //             });
  //         }
  //     })
  //   } else {
  //       let votes = model.get('votes');
  //       console.log(votes);
  //       model.set('votes', votes.concat(store.session.get('username')))
  //       model.save({voteCount: model.get('voteCount') + 1})
  //     }
  //   }
  // });
  // }
  // }
})

export default Bands;
