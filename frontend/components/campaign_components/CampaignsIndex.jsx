const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CampaignActions = require('../../actions/campaign_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignIndexItem = require("./CampaignIndexItem");




const CampaignsIndex = React.createClass({


  getInitialState() {
    return { campaigns: CampaignStore.all() };
  },

  onChange() {
    this.setState({campaigns: CampaignStore.all()});
  },

  componentDidMount() {
    this.listener = CampaignStore.addListener(this.onChange);
    CampaignActions.fetchCampaigns();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {

    let campaignList = this.state.campaigns.map(function(el, i){
      return ( <Link key={i} to={`/campaigns/${el.id}`}><CampaignIndexItem campaign={el}/></Link>);
    });

    return ( <div className="group">
                  { campaignList }
              </div>
            );
  }

});

module.exports = CampaignsIndex;
