const Store = require('flux/utils').Store;
const CampaignConstants = require('../constants/campaign_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const CampaignStore = new Store(AppDispatcher);

let _campaigns = {};

const resetCampaigns = function (campaigns) {
  _campaigns = {};

  campaigns.forEach(function (campaign) {
    _campaigns[campaign.id] = campaign;
  });
};

const setCampaign = function (campaign) {
  _campaigns[campaign.id] = campaign;
};

const removeCampaign = function (campaign) {
  delete _campaigns[campaign.id];
};

CampaignStore.all = function () {

  return Object.keys(_campaigns).map(function (campaignId) {
    return _campaigns[campaignId];
  });
};

CampaignStore.find = function (id) {
  return _campaigns[id];
};


CampaignStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CampaignConstants.CAMPAIGNS_RECEIVED:
      resetCampaigns(payload.campaigns);
      CampaignStore.__emitChange();
      break;
    case CampaignConstants.CAMPAIGN_RECEIVED:
      setCampaign(payload.campaign);
      CampaignStore.__emitChange();
      break;
    case CampaignConstants.CAMPAIGN_REMOVED:
      removeCampaign(payload.campaign);
      CampaignStore.__emitChange();
      break;
  }
};

module.exports = CampaignStore;
