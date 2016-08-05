const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;




const CampaignsIndexItem = React.createClass({


  render() {
    return (
      <div>
        <div className="small-campaign-item">
          <img
            alt="Project image"
            className="project-thumbnail-img"
            src={this.props.campaign.image_url}
            width="100%"
            height="auto"/>
            <div className="small-campaign-title">{ this.props.campaign.title }</div>
        </div>
      </div>
    );
  }

});

module.exports = CampaignsIndexItem;
