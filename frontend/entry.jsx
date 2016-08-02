const ReactDOM = require('react-dom');
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const LoginForm = require("./components/LoginForm");

window.SessionActions = require("./actions/session_actions");
const SessionStore = require("./stores/session_store");

const App = React.createClass({

  sessionChanged() {
    let name;
    if (SessionStore.isUserLoggedIn()) {
      name = SessionStore.currentUser().username;
    } else {
      name = "Nobody";
    }
    this.setState({currentUser: name});
  },

  componentDidMount() {
    SessionStore.addListener(this.sessionChanged);
  },

  getInitialState() {
    return { currentUser: "Nobody" };
  },

  render() {

    return (
        <div>
          <header><h1>KickRestarter</h1></header>
          <h3>Logged in?: {this.state.currentUser}</h3>
          { this.props.children }
        </div>
    );
  }
});

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginForm} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(appRouter, document.querySelector("#content"));
});
