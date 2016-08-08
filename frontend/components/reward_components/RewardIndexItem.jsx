const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');



const RewardsIndexItem = React.createClass({
  render() {
    return (
      <div className="reward-item">
        <div>{this.props.reward.title}</div>
        <div>{this.props.reward.description}</div>
        <div>{this.props.reward.min_amount}</div>
        <div>{this.props.reward.delivery_date}</div>
      </div>
    );
  }
});

module.exports = RewardsIndexItem;
