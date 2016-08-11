const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CommentActions = require('../../actions/comment_actions');
const SessionStore = require('../../stores/session_store');
// const CommentStore = require('../../stores/comment_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CommentIndexItem = require("./CommentIndexItem");




const CommentsIndex = React.createClass({

  submitComment(){
    let data = Object.assign({}, this.state, {author_id: SessionStore.currentUser().id, campaign_id: this.props.campaign.id});
    CommentActions.createComment(data);
  },

  getInitialState() {
    return { body: "" };
  },

  changeComment(e){
    this.setState({ body: e.target.value });
  },

  render() {
    let commentList = this.props.campaign.comments.map(function(el, i){

      return ( <CommentIndexItem comment={el} key={i}/>);
    });

    return ( <div className="group">
                <div className="comment-box">
                <div className="input campaign-input">
                <textarea
                  maxLength="135"
                  className="no-input required textarea campaign-input-field"
                  onChange={this.changeComment}
                  value={this.state.body}
                  placeholder="Start trolling..."/>
                </div>
                <div onClick={this.submitComment} id="submit-comment-button" className="new-reward-options-container bold-14 group reward-form-submit submit-campaign">
                    <span className="reward-form-option button-text">Comment</span>
                </div>
                </div>

                <div>{ commentList }</div>
              </div>
            );
  }

});

module.exports = CommentsIndex;
