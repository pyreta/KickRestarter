
const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignStore = require('../../stores/campaign_store');
const CampaignActions = require('../../actions/campaign_actions');
const MethodModule = require('../../constants/method_module');


const UserShow = React.createClass({

  getInitialState() {
    return { user: SessionStore.currentUser() };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  onChange() {
    this.setState({
      user: SessionStore.currentUser()
    });
  },


  render() {
    return (
      <div className="profile-container">
        <div>{this.state.user.username}</div>
        <div className="profile-picture-container">
          <img src={this.state.user.image_url}></img>
        </div>
      </div>);

  }
});

module.exports = UserShow;
