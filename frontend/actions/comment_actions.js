const CommentApiUtil = require('../util/comment_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
// const CampaignConstants = require('../constants/comment_constants.js');
const ErrorActions = require('./error_actions');
const CampaignActions = require('./campaign_actions');

module.exports = {

  createComment (data) {
    CommentApiUtil.createComment(data, CampaignActions.receiveCampaign, ErrorActions.setErrors);
  },

};
