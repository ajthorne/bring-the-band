import React from 'react';
import store from '../store';

const SignUp = React.createClass({
  getInitialState: function() {
  return {session: store.session.toJSON()}
},

updateState: function() {
  this.setState(store.session.toJSON());
},

componentDidMount: function() {
  store.session.on('update change', this.updateState);
},

componentWillUnmount: function() {
  store.session.off('update change', this.updateState);
},

submitHandler: function (evt) {
  evt.preventDefault();
  console.log('You signed up!');
  let data = {
    name: this.refs.name.value,
    username: this.refs.username.value,
    password: this.refs.password.value
  }
  // console.log(data);
  store.session.signup(data)
  //define login function on session model to store data to server
  hashHistory.push('/');
},

render: function () {
  return (
    <form onSubmit={this.submitHandler}>
      <input type="text" placeholder="Enter your name" ref="name"/>
      <input type="text" placeholder="Enter a username" ref="username"/>
      <input type="password" placeholder="Enter a password" ref="password"/>
      <input type="submit" value="Sign Up"/>
    </form>
  )
}
})

export default SignUp;
