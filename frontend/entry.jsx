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
// const RewardsIndex = require("./components/reward_components/RewardsIndex");
const CampaignShow = require("./components/campaign_components/CampaignShow");
const CampaignForm = require("./components/campaign_components/CampaignForm");
const CampaignEdit = require("./components/campaign_components/CampaignEdit");
const UserShow = require("./components/user_components/UserShow");
// const UserEdit = require("./components/user_components/UserEdit");
const NavBar = require("./components/NavBar");
const Footer = require("./components/Footer");
const HomePage = require("./components/HomePage");

const SessionActions = require("./actions/session_actions");
const SessionStore = require("./stores/session_store");

const PledgeForm = require("./components/reward_components/PledgeForm");
const RewardForm = require("./components/reward_components/RewardForm");

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
      <Route path="/homepage" component={HomePage} />
      <Route path="/start" component={CampaignForm} onEnter={ _ensureLoggedIn }/>
      <Route path="/campaigns/:campaignId" component={CampaignShow} />
      <Route path="/campaigns/:campaignId/edit" component={CampaignEdit} onEnter={ _ensureLoggedIn }/>
      <Route path="/campaigns/:campaignId/pledge" component={PledgeForm}/>
      <Route path="/campaigns/:campaignId/rewards/new" component={RewardForm}/>
      <Route path="/profile" component={UserShow} onEnter={ _ensureLoggedIn }/>
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
