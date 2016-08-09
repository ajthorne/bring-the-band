import { expect } from  'chai';
import { shallow } from 'enzyme';
import React from 'react';
import VotesView from '../../app/scripts/components/Vote';
// import store from '../../apps/scripts/store';

// let votes = new bandsCollection();

describe('<VotesView/> component', function () {
  let vote = shallow(<VotesView />);

  it('should exist', () => {
    expect(vote).to.exist
  })

  // set state to test comparator functionality
  it('should have a comparator to sort votes', () => {
    vote.setState({name: 'hanson', voteCount: 5})
    expect(vote.state('comparator')).to.equal(5)
    //this is failing because I'm sure I'm doing the syntax incorrectly.
    //comes up as undefined
  })
})
