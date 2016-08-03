const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const Footer = React.createClass({

  getInitialState() {
    return null;
  },


  render() {

    return (
      <div className="footer">
      </div>
    );
  }
});

module.exports = Footer;
