import { expect } from 'chai';
import Session from '../../app/scripts/models/session';

describe('session model', function () {
  let session = new Session();

  it('should have login, logout, signup, and retrieve properties', () => {
    expect(session).to.have.property('login'),
    expect(session).to.have.property('logout'),
    expect(session).to.have.property('signup'),
    expect(session).to.have.property('retrieve')
    // expect(session).to.have.property('hi')
  })

  it('they should all be functions', () => {
    expect(session.login).to.be.a('function'),
    expect(session.logout).to.be.a('function'),
    expect(session.signup).to.be.a('function'),
    expect(session.retrieve).to.be.a('function')
    // expect(session.retrieve).to.be.a('string')
  })
})

// describe('login function', function () {
//   it('should make an ajax request', () => {
//   expect(session.login).to.
//   })

// })
