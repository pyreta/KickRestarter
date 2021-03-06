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
const CampaignShow = require("./components/campaign_components/CampaignShow");
const CampaignForm = require("./components/campaign_components/CampaignForm");
const CampaignEdit = require("./components/campaign_components/CampaignEdit");
const UserShow = require("./components/user_components/UserShow");
const NavBar = require("./components/NavBar");
const Footer = require("./components/Footer");
const HomePage = require("./components/HomePage");

const SessionActions = require("./actions/session_actions");
const SessionStore = require("./stores/session_store");

const PledgeForm = require("./components/reward_components/PledgeForm");
const RewardForm = require("./components/reward_components/RewardForm");
const ProfileForm = require("./components/user_components/ProfileForm");

const App = React.createClass({

  componentDidMount(){
    jQuery(window).resize(function() {
      jQuery('.hidden-nav').css({ width: window.innerWidth });
    });
  },

  render() {
    return (
        <div>
          <header><NavBar /></header>
          <div className = "hidden-nav hidden animated" style={{"width":window.innerWidth}}><NavBar /></div>
          { this.props.children }
          <Footer />
        </div>
    );
  }
});

let _ensureLoggedIn = function (nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/login');
  }
};

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CampaignsIndex} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/profile" component={ProfileForm} />
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
  window.onscroll = function() {
      if (window.pageYOffset > 40){
        jQuery(".hidden-nav").addClass("flipInX");
        jQuery(".hidden-nav").removeClass("hidden");
      } else if (window.pageYOffset <= 60) {
        jQuery(".hidden-nav").removeClass("flipInX");
        jQuery(".hidden-nav").addClass("hidden");

      }
  };

});
