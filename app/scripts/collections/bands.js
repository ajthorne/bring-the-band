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

  voteFor: function (props) {
    let id = props.id
    let name = props.name
    let imgUrl = props.imgUrl

    this.fetch({success: () => {
    let model = this.where({id: id})[0];
    console.log(model.get('votes'));

    // if (model.get('votes').indexOf(store.session.get('username')) === -1) {
    //   console.log('hi');
    // }

    // console.log(model);
    // console.log(votes);

    if (!model) {
      this.create({
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
  },
toggleVote: function () {
  
}

});

export default Bands;
