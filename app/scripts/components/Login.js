import React from 'react';
import store from '../store';
import { hashHistory } from 'react-router';

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
    <form onSubmit={this.submitHandler}>
      <input type="text" placeholder="Enter a username" ref="username"/>
      <input type="password" placeholder="Enter a password" ref="password"/>
      <input type="submit" value="Login"/>
    </form>
  )
}
})

export default Login;
