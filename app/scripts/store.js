import Bands from './collections/bands';
import Band from './models/band';
import Session from './models/session';
import SearchResult from './models/searchresult';
import SearchResults from './collections/searchresults';

let store = {
  bandsCollection: new Bands(),
  //access using store.bandsCollection

  band: new Band(),
  //access using store.band

  session: new Session(),
  //access using store.session

  searchResult: new SearchResult(),
  //access using store.searchResult

  searchCollection: new SearchResults()
  //access using store.searchCollection

}

export default store;
