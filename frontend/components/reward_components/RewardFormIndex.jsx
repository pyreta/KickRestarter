const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardActions = require('../../actions/reward_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const RewardStore = require('../../stores/reward_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardsIndex = require("./RewardsIndex");
const RewardFormIndexItem = require("./RewardFormIndexItem");


const RewardFormIndex = React.createClass({

  componentDidMount(){
    this.rewardListener = RewardStore.addListener(this.onChange);
  },

  componentWillUnmount(){
    this.rewardListener.remove();
  },

  getInitialState() {
    return {
      rewards: RewardStore.all()
    };
  },

  onChange() {
    this.setState({rewards: RewardStore.all()});
  },

  rewards(){
    let rewardList = this.state.rewards.map(function(reward, idx){

      return (
        <RewardFormIndexItem key={idx} rewardState={reward}/>
      );
    });
    console.log(rewardList);
    return rewardList;
  },

  render() {
    return(
      <div>
        { this.rewards() }
      </div>
    );
  },

});

module.exports = RewardFormIndex;
