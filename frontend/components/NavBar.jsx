const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const NavBar = React.createClass({

  sessionChanged() {
    let name;
    if (SessionStore.isUserLoggedIn()) {
      this.setState({currentUser: SessionStore.currentUser().username});
    } else {
      this.setState({currentUser: false});
    }

  },

  componentDidMount() {
    SessionStore.addListener(this.sessionChanged);
  },

  getInitialState() {
    return { currentUser: false };
  },

  logOutClick(e) {
    e.preventDefault();
    SessionActions.logOut();
    this.setState({ currentUser: false });
  },

  render() {
    let greeting;
    if (this.state.currentUser) {
      greeting = (
        <div>
          <div>
            Welcome, {this.state.currentUser}
          </div>
          <button onClick={this.logOutClick}>Log Out</button>
        </div>);
    } else {
      greeting = (<a href="#/login">Log In</a>);
    }

    return (
      <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/"><img src={window.logoNavbar}></img></Link>
      </div>
        { greeting }
      </div>
    );
  }
});

module.exports = NavBar;
