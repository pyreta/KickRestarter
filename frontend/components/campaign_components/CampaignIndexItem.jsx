const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');


const CampaignsIndexItem = React.createClass({

  percentPledged() {
    let pDec = this.props.campaign.amount_pledged/this.props.campaign.goal;
    return (Math.floor(pDec*100)).toString() + "%";
  },

  totalPledged() {
    return  MethodModule.parseDollarAmount(this.props.campaign.amount_pledged);
  },

  daysToGo() {
    let days = this.props.campaign.days_to_go;
    days = days < 0 ? 0 : days;
    return days;
  },

  render() {

    let location = this.props.campaign.city + ", " + this.props.campaign.state;
    return (
      <div  className="campaign-list-item">
        <div className="small-campaign-item">
          <img
            alt="Project image"
            className="project-thumbnail-img"
            src={this.props.campaign.image_url}
            width="100%"
            height="179.72 px"/>

            <div className="campaign-info-container-small">
              <div className="small-campaign-title">{ this.props.campaign.title }</div>
              <div className="small-campaign-name">{ this.props.campaign.author }</div>

              <div className="small-blurb">
                <div className="small-campaign-name small-campaign-blurb">{ this.props.campaign.description }</div>
              </div>

              <ul className="location">
                <li className="small-campaign-name project-stats-item">
                  <div className="marker"><img src={window.mapMarker}/></div>
                </li>
                <li className="small-campaign-name project-stats-item">{ location }</li>
              </ul>

              <div className="project-progress-bar">
                <div style={{width: this.percentPledged()}} className="project-percent-pledged"> </div>
              </div>
              <ul className="project-stats">
                <li className="project-stats-item">
                  <div className="project-stats-value">{this.percentPledged()}</div>
                  <div className="project-stats-label">funded</div>
                </li>
                <li className="project-stats-item">
                  <div className="project-stats-value">{this.totalPledged()}</div>
                  <div className="project-stats-label">pledged</div>
                </li>
                <li className="project-stats-item">
                  <div className="project-stats-value">{this.daysToGo()}</div>
                  <div className="project-stats-label">days to go</div>
                </li>
              </ul>
            </div>

        </div>
      </div>
    );
  }

});

module.exports = CampaignsIndexItem;
