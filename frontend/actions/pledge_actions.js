const PledgeApiUtil = require('../util/pledge_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const PledgeConstants = require('../constants/pledge_constants.js');
const ErrorActions = require('./error_actions');
const CampaignActions = require('./campaign_actions');

module.exports = {
  // fetchPledges () {
  //   PledgeApiUtil.fetchPledges(this.receiveAll);
  // },
  //
  // getPledge (id) {
  //   PledgeApiUtil.getPledge(id, this.receivePledge, ErrorActions.setErrors);
  // },

  createPledge (data) {
    PledgeApiUtil.createPledge(data, CampaignActions.receiveCampaign, ErrorActions.setErrors);
  },

  // editPledge (data, id) {
  //   PledgeApiUtil.updatePledge(data, id, this.receivePledge, ErrorActions.setErrors);
  // },
  //
  // deletePledge (id) {
  //   PledgeApiUtil.deletePledge(id, this.removePledge);
  // },
  //
  // receiveAll (pledges) {
  //   AppDispatcher.dispatch({
  //     actionType: PledgeConstants.PLEDGES_RECEIVED,
  //     pledges: pledges
  //   });
  // },
  //
  receivePledge (pledge) {
    AppDispatcher.dispatch({
      actionType: PledgeConstants.PLEDGE_RECEIVED,
      pledge: pledge
    });
  },
  //
  // removePledge (pledge) {
  //   AppDispatcher.dispatch({
  //     actionType: PledgeConstants.PLEDGE_REMOVED,
  //     pledge: pledge
  //   });
  // }
};
