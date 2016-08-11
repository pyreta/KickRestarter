const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');


const CommentsIndexItem = React.createClass({



  render() {

    console.log(JSON.stringify(this.props.comment.author.image_url));
    return (
      <div  className="comment-list-item">
        {this.props.comment.body}
        {this.props.comment.date}
        {this.props.comment.author.username}
        <div className="profile-icon-container">
          <img src={this.props.comment.author.image_url}></img>
        </div>
      </div>
    );
  }

});

module.exports = CommentsIndexItem;
