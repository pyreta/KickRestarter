const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardIndexItem = require("./RewardIndexItem");




const RewardsIndex = React.createClass({


  render() {

    let rewardList = [];

    if (this.props.campaign.rewards){
      rewardList = this.props.campaign.rewards.map(function (reward, i){
        return (
            <li key={i}>
              <RewardIndexItem reward={ reward } key={i}/>
            </li>
          );
      });
    }

    return ( <div>
                <ul className="reward-column group">
                  { rewardList }
                </ul>
              </div>
            );
  }

});

module.exports = RewardsIndex;
