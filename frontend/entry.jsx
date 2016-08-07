const ReactDOM = require('react-dom');
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const LoginForm = require("./components/LoginForm");
const SignUpForm = require("./components/SignUpForm");
const CampaignsIndex = require("./components/campaign_components/CampaignsIndex");
const CampaignForm = require("./components/campaign_components/CampaignForm");
const CampaignEdit = require("./components/campaign_components/CampaignEdit");
const NavBar = require("./components/NavBar");
const Footer = require("./components/Footer");
const HomePage = require("./components/HomePage");

const SessionActions = require("./actions/session_actions");
const SessionStore = require("./stores/session_store");

const App = React.createClass({

  render() {

    return (
        <div>
          <header><NavBar /></header>
          { this.props.children }
          <Footer />
        </div>
    );
  }
});

let _ensureLoggedIn = function (nextState, replace) {
  console.log("ENSURE LOGGED IN FUNC IN ENTRY FILE TO BE FILLED OUT");
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
};

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/discover" component={CampaignsIndex} />
      <Route path="/start" component={CampaignForm} onEnter={ _ensureLoggedIn }/>
      <Route path="/campaigns/:campaignId" component={CampaignEdit} onEnter={ _ensureLoggedIn }/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  if (window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  } else {
    SessionActions.receiveCurrentUser({});
  }
  ReactDOM.render(appRouter, document.querySelector("#content"));
});
