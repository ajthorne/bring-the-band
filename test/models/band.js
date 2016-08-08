import { expect } from 'chai';
import Band from '../../app/scripts/models/band';

describe('band model', function () {
  let band = new Band();
  //should have votecount property
  it('should have a votecount property', () => {
    expect(band).to.have.property('voteCount');
  })

  //votecount should be a function
  it('should be a function', () => {
    expect(band.voteCount).to.be.a('function');
  })

  it('should have a function that counts votes', () => {
    expect(band.voteCount()).to.equal(0);
  })

  it('should count 4 votes when 4 votes are in the votes array', ()=> {
    band.set('votes', ['manda', 'jess', 'quincy', 'dana']);
    expect(band.voteCount()).to.equal(4);
  })

})
