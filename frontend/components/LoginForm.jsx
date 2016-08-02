const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  render() {
    return (
      <div>
        <div>I am a Login Form, bra..</div>
          <form onSubmit={this.formSubmit}>

            <input
              type="text"
              onChange={this.changeUsername}
              value={this.state.username}>Username
            </input>

            <input
              type="password"
              onChange={this.changePassword}
              value={this.state.password}>Username
            </input>

            <input
              type="password"
              onChange={this.changePassword}
              value={this.state.password}>Username
            </input>

          </form>
      </div>
    );
  }
});

module.exports = LoginForm;
