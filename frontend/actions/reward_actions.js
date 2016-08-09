const RewardApiUtil = require('../util/reward_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const RewardConstants = require('../constants/reward_constants.js');
const ErrorActions = require('./error_actions');

module.exports = {
  // fetchRewards () {
  //   RewardApiUtil.fetchRewards(this.receiveAll);
  // },
  //
  // getReward (id) {
  //   RewardApiUtil.getReward(id, this.receiveReward, ErrorActions.setErrors);
  // },

  createReward (data) {
    RewardApiUtil.createReward(data, this.receiveReward, ErrorActions.setErrors);
  },

  // editReward (data, id) {
  //   RewardApiUtil.updateReward(data, id, this.receiveReward, ErrorActions.setErrors);
  // },
  //
  // deleteReward (id) {
  //   RewardApiUtil.deleteReward(id, this.removeReward);
  // },
  //
  // receiveAll (rewards) {
  //   AppDispatcher.dispatch({
  //     actionType: RewardConstants.REWARDS_RECEIVED,
  //     rewards: rewards
  //   });
  // },
  //
  receiveReward (reward) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_RECEIVED,
      reward: reward
    });
  },
  //
  // removeReward (reward) {
  //   AppDispatcher.dispatch({
  //     actionType: RewardConstants.REWARD_REMOVED,
  //     reward: reward
  //   });
  // }
};
