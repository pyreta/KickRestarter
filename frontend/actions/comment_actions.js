const CommentApiUtil = require('../util/comment_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
// const CampaignConstants = require('../constants/comment_constants.js');
const ErrorActions = require('./error_actions');
const CampaignActions = require('./campaign_actions');

module.exports = {
  // fetchCampaigns () {
  //   CommentApiUtil.fetchComments(this.receiveAll);
  // },
  //
  // getComment (id) {
  //   CommentApiUtil.getComment(id, this.receiveComment, ErrorActions.setErrors);
  // },

  createComment (data) {
    CommentApiUtil.createComment(data, this.receiveCampaign, ErrorActions.setErrors);
  },

  // editComment (data, id) {
  //   CommentApiUtil.updateComment(data, id, this.receiveComment, ErrorActions.setErrors);
  // },
  //
  // deleteComment (id) {
  //   CommentApiUtil.deleteComment(id, this.removeComment);
  // },
  //
  // receiveAll (comments) {
  //   AppDispatcher.dispatch({
  //     actionType: CommentConstants.COMMENTS_RECEIVED,
  //     comments: comments
  //   });
  // },
  //
  // receiveComment (comment) {
  //   AppDispatcher.dispatch({
  //     actionType: CommentConstants.COMMENT_RECEIVED,
  //     comment: comment
  //   });
  // },
  //
  // removeComment (comment) {
  //   AppDispatcher.dispatch({
  //     actionType: CommentConstants.COMMENT_REMOVED,
  //     comment: comment
  //   });
  // }
};
