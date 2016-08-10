const Store = require('flux/utils').Store;
const RewardConstants = require('../constants/reward_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const RewardStore = new Store(AppDispatcher);

let _rewards = {
  1: {min_amount: 0, title: "", description: "", delivery_date: "2017-08-30", id: 1}
};

const resetRewards = function (rewards) {
  _rewards = {};
  rewards.forEach(function (reward) {
    _rewards[reward.id] = reward;
  });
};

RewardStore.nextId = function(){
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  if (Object.keys(_rewards).length===0) return 1;
  return getMaxOfArray(Object.keys(_rewards)) + 1;
};

const setReward = function (reward) {
  _rewards[reward.id] = reward;
};

const removeReward = function (id) {
  delete _rewards[id];
};

RewardStore.all = function () {
  return Object.keys(_rewards).map(function (rewardId) {
    return _rewards[rewardId];
  });
};

RewardStore.find = function (id) {
  return _rewards[id];
};


RewardStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RewardConstants.REWARD_FORM_ITEMS_RECEIVED:
      resetRewards(payload.rewards);
      RewardStore.__emitChange();
      break;
    case RewardConstants.REWARD_FORM_ITEM_RECEIVED:
      setReward(payload.reward);
      RewardStore.__emitChange();
      break;
    case RewardConstants.REWARD_FORM_ITEM_REMOVED:
      removeReward(payload.id);
      RewardStore.__emitChange();
      break;
  }
};

module.exports = RewardStore;
