import React from 'react';
import store from '../store';
import SingleResult from './SingleResult';

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

  componentWillUnMount: function () {
    store.searchCollection.off('update change', () => {
      this.setState({searchCollection: store.searchCollection.toJSON()
      });
    })
  },

  render: function () {
    // console.log(store.searchCollection);
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
      // console.log(bandImg);

      return <SingleResult key={i} id={bandId} name={bandName} imgUrl={bandImg}/>
    })
    // console.log(this.props);
    return (
      <div className="results-holder">
        <h2>Your Results</h2>
        <ul className="results-list">
          {bands}
        </ul>
      </div>
    )
  }
})

export default ResultsView;
