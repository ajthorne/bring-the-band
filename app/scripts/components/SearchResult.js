import React from 'react';
import store from '../store';

const ResultsView = React.createClass({
  getInitialState: function () {
    return {
      searchCollection: store.searchCollection.toJSON()
    }
  },
  componentWillMount: function () {
    store.searchCollection.get();
    store.searchCollection.on('update change', () => {
      this.setState({searchCollection: store.searchCollection.toJSON()
      });
    })
  },
  render: function () {
    console.log(store.searchCollection);
    let bands = store.searchCollection.map((band, i, arr) => {
      let bandName = band.get('name');
      // console.log(bandName);
      let bandId = band.get('id');
      // console.log(bandId);
      let bandImg;

      if (band.get('images')[0]) {
        bandImg = band.get('images')[0].url;
      } else {
        bandImg = 'http://placekitten.com/g/200/200'
      }

      console.log(bandImg);
      return <li key={i} id={bandId} name={bandName} imgUrl={bandImg}/>
      //imgUrl is giving a warning. check for fix later
    })
    return (
      <div>
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
})

export default ResultsView;
