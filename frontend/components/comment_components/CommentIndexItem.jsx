const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');


const CommentsIndexItem = React.createClass({

  parseDate() {
    let mil = Date.parse(this.props.comment.date.toString());
    let dateObj = new Date(mil);
    let month = MethodModule.months[dateObj.getMonth()+1];
    let year = dateObj.getFullYear();
    return month + " " + year.toString();
  },

  render() {

    return (
      <div  className="comment-list-item group">

      <div className="comment-user-info-container">
        <div className="comment-photo hidden">
          <img src={this.props.comment.author.image_url}></img>
        </div>
        <div className="bold-16">{this.props.comment.author.username}</div>
        <div className="reg-12">{this.parseDate()}</div>
      </div>
        <div className="comment">{this.props.comment.body}</div>


      </div>
    );
  }

});

module.exports = CommentsIndexItem;
