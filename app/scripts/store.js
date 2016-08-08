import Bands from './collections/bands';
import Band from './models/band';
import Session from './models/session';
import SearchResult from './models/searchresult';
import SearchResults from './collections/searchresults';

let store = {
  bandsCollection: new Bands(),
  //access using store.bandsCollection

  session: new Session(),
  //access using store.session

  searchCollection: new SearchResults()
  //access using store.searchCollection

}

export default store;
