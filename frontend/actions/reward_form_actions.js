const RewardApiUtil = require('../util/reward_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const RewardConstants = require('../constants/reward_constants.js');
const ErrorActions = require('./error_actions');

module.exports = {


  fetchRewards (rewards) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_FORM_ITEMS_RECEIVED,
      rewards: rewards
    });
  },

  createReward (reward) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_FORM_ITEM_RECEIVED,
      reward: reward
    });
  },

  editReward (reward) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_FORM_ITEM_UPDATED,
      reward: reward
    });
  },

  removeReward (id) {
    AppDispatcher.dispatch({
      actionType: RewardConstants.REWARD_FORM_ITEM_REMOVED,
      id: id
    });
  }
};
