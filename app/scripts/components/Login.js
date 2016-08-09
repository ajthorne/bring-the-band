import React from 'react';
import store from '../store';
import { hashHistory, Link } from 'react-router';

const Login = React.createClass({
  getInitialState: function() {
  return {session: store.session.toJSON()}
},

updateState: function() {
  this.setState({session: store.session.toJSON()});
},

componentDidMount: function() {
  store.session.on('update change', this.updateState);
},

componentWillUnmount: function() {
  store.session.off('update change', this.updateState);
},

submitHandler: function (evt) {
  evt.preventDefault();
  console.log('You logged in!');
  let data = {
    username: this.refs.username.value,
    password: this.refs.password.value
  }
  // console.log(data);
  store.session.login(data)
  //define login function on session model to store data to server
  hashHistory.push('/');
},

render: function () {
  return (
    <form className="login-container" onSubmit={this.submitHandler}>
      <input className="login-name" type="text" placeholder="Enter your username" ref="username"/>
      <input className="login-password" type="password" placeholder="Enter your password" ref="password"/>
      <input className="login-btn" type="submit" value="Login"/>
      <p className="login-copy">Not a current user? Sign up <Link to="/signup">here</Link>.</p>
    </form>
  )
}
})

export default Login;
