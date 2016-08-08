const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignStore = require('../../stores/campaign_store');
const CampaignActions = require('../../actions/campaign_actions');

Number.prototype.formatMoney = function(c, d, t){
  let n = this;
  c = isNaN(c = Math.abs(c)) ? 2 : c;
  d = d === undefined ? "." : d;
  t = t === undefined ? "," : t;
  let s = n < 0 ? "-" : "";
  let i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
  let j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

const CampaignShow = React.createClass({

  percentPledged() {
    return '20%';
  },

  totalPledged() {
    return '$3,745';
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.campaignListener = CampaignStore.addListener(this.onChange);
    this.id = parseInt(this.props.params.campaignId);
    CampaignActions.getCampaign(this.id);

  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.campaignListener.remove();
  },

  onChange() {
    this.setState({
      campaign: CampaignStore.find(this.id)
    });
  },

  daysToGo() {
    return this.state.campaign.days_to_go;
  },


  // parseUrl(url) {
  //   let urlSplit = url.split("watch?v=");
  //   if (urlSplit.length == 2){
  //     this.setState({embedUrl: urlSplit.join("embed/")});
  //   } else {
  //     this.setState({embedUrl: null});
  //   }
  // },

  getInitialState() {
    const potentialCampaign = CampaignStore.find(this.props.params.campaignId);
    return ({campaign: potentialCampaign ? potentialCampaign : {}});
  },

  parseGoal() {
    if (!this.state.campaign.goal) return "";


    return "$" + this.state.campaign.goal.formatMoney(0);
  },

  parseDollarAmount(amount) {
    if (!amount) return "$0";


    return "$" + amount.formatMoney(0);
  },

  render() {

    let location = this.state.campaign.city + ", " + this.state.campaign.state;

    return (

      <div>
        <div>{JSON.stringify(this.state.campaign)}</div>

        <div>{this.state.campaign.title}</div>
        <div>by <span>{this.state.campaign.author}</span></div>

        <div className="preview-video">
          <iframe
            width="680"
            height="382.5"
            src={this.state.campaign.video_embed_url}
            frameBorder="0" allowFullScreen>
          </iframe>
        </div>
        { location }
        { this.parseDollarAmount(this.state.campaign.amount_pledged) + " of "+ this.parseGoal() + " goal" }
        <div>{this.state.campaign.description}</div>
        <div>{this.state.campaign.days_to_go} days to go</div>
        <div>{this.state.campaign.backers} Backers</div>

      </div>
    );
  }

});

module.exports = CampaignShow;
