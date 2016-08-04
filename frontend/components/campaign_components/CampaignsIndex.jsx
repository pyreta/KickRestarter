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

  // errors() {
  //   const errors = ErrorStore.errors("campaigns-index");
  //   const messages = errors.map( (errorMsg, i) => {
  //     return <li key={ i }>{ errorMsg }</li>;
  //   });
  //
  //   return <ul>{ messages }</ul>;
  // },
  onChange() {
    this.setState({campaigns: CampaignStore.all()});
  },

  componentDidMount() {
    CampaignStore.addListener(this.onChange);
    CampaignActions.fetchCampaigns();
  },

  render() {

    let campaignList = this.state.campaigns.map(function(el, i){
      return ( <Link key={i} to="#/login"><CampaignIndexItem campaign={el}/></Link>);
    });

    return ( <div>
                <div>CAMPAIGN INDEX</div>
                  { campaignList }
              </div>
            );
  }

});

module.exports = CampaignsIndex;
