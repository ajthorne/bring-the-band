import Backbone from 'backbone';
import Band from '../models/band';
import settings from '../settings';

const Bands = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appId}/votefeed`,
  //kinvey stored data
  model: Band,

  comparator: function(band) {
    return band.get('voteCount') * -1
  },

  voteFor: function (props, username) {
    let id = props.id
    let name = props.name
    let imgUrl = props.imgUrl

    this.fetch({success: () => {
    let model = this.where({id: id})[0];
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
            console.log('My first vote. THANK YOU!!!!');

              band.set({
                votes: band.get('votes').concat(username),
              });

              band.save({
                voteCount: band.voteCount()
              });
          }
      })
    } else if (model.get('votes').indexOf(username) === -1) {
        console.log('You voted for me. You\'re so sweet!');

        let votes = model.get('votes');
        // console.log(votes);
        model.set('votes', votes.concat(username))
        model.save({voteCount: model.get('voteCount') + 1})
      } else {
        console.log('You can\'t vote for this again!');
      }
    }
  });
  },
});

export default Bands;
