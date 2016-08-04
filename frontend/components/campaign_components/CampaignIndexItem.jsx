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
            src="https://ksr-ugc.imgix.net/assets/012/451/510/83cd0754c00ce53da20cf35f554eb42a_original.jpg?w=338&amp;h=190&amp;fit=fill&amp;bg=000000&amp;v=1468672720&amp;auto=format&amp;q=92&amp;s=2882e4ecc816145340c84e263521a37d"
            width="100%"
            height="auto"/>
            <div className="small-campaign-title">{ this.props.campaign.title }</div>
        </div>
      </div>
    );
  }

});

module.exports = CampaignsIndexItem;
