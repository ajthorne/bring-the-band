import { expect } from 'chai';
import Bands from '../../app/scripts/collections/bands';

describe('band collection', function () {
  let bands = new Bands();

  it('should have voteFor property', () => {
    expect(bands).to.have.property('voteFor');
  })

  it('should be a function', () => {
    expect(bands.voteFor).to.be.a('function');
  })

  it('should post a vote to server', () => {
    expect()
  })
  //need to make an ajax post test ??
})
