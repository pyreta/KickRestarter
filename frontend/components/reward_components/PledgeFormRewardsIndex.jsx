const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
// const RewardActions = require('../../actions/reward_actions');
const SessionStore = require('../../stores/session_store');
// const RewardStore = require('../../stores/reward_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const PledgeFormRewardIndexItem = require("./PledgeFormRewardIndexItem");




const PledgeFormRewardsIndex = React.createClass({

  getInitialState(){
    return {selectedItem: null};
  },

  changeSelected(e){
    this.setState({selectedItem: e.target.id});
  },


  render() {

    let rewardList = [];

    if (this.props.campaign.rewards){
      rewardList = this.props.campaign.rewards.map(function (reward, i){
        return (
            <li key={i}>
              <PledgeFormRewardIndexItem reward={ reward } key={i} id={i}/>
            </li>
          );
      });
    }

    return ( <div>
                <ul className="pledge-reward-column group">
                  { rewardList }
                </ul>
              </div>
            );
  }

});

module.exports = PledgeFormRewardsIndex;
