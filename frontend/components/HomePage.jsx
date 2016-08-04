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


      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Tw0B1DbPIic"
        frameBorder="0" allowFullScreen></iframe>

      </div>
    );
  }
});

module.exports = HomePage;
