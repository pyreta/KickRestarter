const CampaignCampaignApiUtil = require('../util/campaign_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const CampaignConstants = require('../constants/campaign_constants.js');
const ErrorActions = require('./error_actions');

module.exports = {
  fetchCampaigns () {
    CampaignCampaignApiUtil.fetchCampaigns(this.receiveAll);
  },

  getCampaign (id) {
    CampaignApiUtil.getCampaign(id, this.receiveCampaign, ErrorActions.setErrors);
  },

  createCampaign (data) {
    CampaignApiUtil.createCampaign(data, this.receiveCampaign, ErrorActions.setErrors);
  },

  editCampaign (data) {
    CampaignApiUtil.updateCampaign(data, this.receiveCampaign, ErrorActions.setErrors);
  },

  deleteCampaign (id) {
    CampaignApiUtil.deleteCampaign(id, this.removeCampaign);
  },

  receiveAll (campaigns) {
    AppDispatcher.dispatch({
      actionType: CampaignConstants.CAMPAIGNS_RECEIVED,
      campaigns: campaigns
    });
  },

  receiveCampaign (campaign) {
    AppDispatcher.dispatch({
      actionType: CampaignConstants.CAMPAIGN_RECEIVED,
      campaign: campaign
    });
  },

  removeCampaign (campaign) {
    AppDispatcher.dispatch({
      actionType: CampaignConstants.CAMPAIGN_REMOVED,
      campaign: campaign
    });
  }
};
