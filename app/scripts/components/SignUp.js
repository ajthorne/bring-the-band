import React from 'react';
import store from '../store';
import { Link } from 'react-router';

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
    <form className="login-container" onSubmit={this.submitHandler}>
      <input className="login-name" type="text" placeholder="Enter a username" ref="username"/>
      <input className="login-password" type="password" placeholder="Enter a password" ref="password"/>
      <input className="login-btn" type="submit" value="Sign Up"/>
      <p className="login-copy">Already a current user? Log in <Link to="/login">here</Link>.</p>
    </form>
  )
}
})

export default SignUp;
