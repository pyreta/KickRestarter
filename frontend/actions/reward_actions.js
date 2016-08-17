const RewardApiUtil = require('../util/reward_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const RewardConstants = require('../constants/reward_constants.js');
const ErrorActions = require('./error_actions');

module.exports = {

  createReward (data) {
    RewardApiUtil.createReward(data, this.receiveReward, ErrorActions.setErrors);
  },

  receiveReward (reward) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_RECEIVED,
      reward: reward
    });
  },

};
