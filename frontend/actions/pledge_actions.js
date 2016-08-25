const PledgeApiUtil = require('../util/pledge_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const PledgeConstants = require('../constants/pledge_constants.js');
const ErrorActions = require('./error_actions');
const CampaignActions = require('./campaign_actions');

module.exports = {

  createPledge (data) {
    PledgeApiUtil.createPledge(data, CampaignActions.receiveCampaign, ErrorActions.setErrors);
  },

  receivePledge (pledge) {
    AppDispatcher.dispatch({
      actionType: PledgeConstants.PLEDGE_RECEIVED,
      pledge: pledge
    });
  },

  deletePledge (id) {
    PledgeApiUtil.deletePledge(id, CampaignActions.receiveCampaign, ErrorActions.setErrors);
  },

  removePledge (pledge) {
    AppDispatcher.dispatch({
      actionType: PledgeConstants.PLEDGE_REMOVED,
      pledge: pledge
    });
  },

};
