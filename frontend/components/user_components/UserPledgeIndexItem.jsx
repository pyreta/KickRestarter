const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardActions = require('../../actions/reward_actions');
const PledgeActions = require('../../actions/pledge_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');

const UserPledgeIndexItem = React.createClass({
  deletePledge(){
    console.log("Delete Pledge");
  },

  render(){
    return (
        <div className="user-pledge">
          <div>{this.props.pledge.campaign}</div>
          <div>{MethodModule.parseDollarAmount(this.props.pledge.amount)}</div>
          <div onClick={this.deletePledge}>Delete</div>
        </div>
      );
  }
});


module.exports = UserPledgeIndexItem;
