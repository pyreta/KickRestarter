const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  getInitialState() {
    return {username: "", password: ""};
  },

  formSubmit(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
    console.log("formSubmit");
  },

  changeUsername(e) {
    this.setState({username: e.target.value});
    console.log(this.state);
  },

  changePassword(e){
    this.setState({password: e.target.value});
    console.log(this.state);
  },

  render() {

    return (
      <div className="login-box group">
        <div>I am a Login Form, bra..</div>
          <form onSubmit={this.formSubmit}>

            <input
              type="text"
              className="input-text"
              onChange={this.changeUsername}
              value={this.state.username} />

            <input
              type="password"
              className="input-text"
              onChange={this.changePassword}
              value={this.state.password} />

            <input
              type="submit"
              className="button"
              value="Login"/>

          </form>
      </div>
    );
  }
});

module.exports = LoginForm;
