const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const HomePage = React.createClass({

  getInitialState() {
    return null;
  },


  render() {

    return (
      <div className="homepage">
        <Link to={"/discover"}><img src={window.placeholder}></img></Link>
      </div>
    );
  }
});

module.exports = HomePage;
