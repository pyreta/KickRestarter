const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CampaignActions = require('../../actions/campaign_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const CampaignStore = require('../../stores/campaign_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardIndexItem = require("./RewardIndexItem");
const RewardsIndex = require("./RewardsIndex");
const PledgeFormRewardIndexItem = require("./PledgeFormRewardIndexItem");
const PledgeFormRewardsIndex = require("./PledgeFormRewardsIndex");




const PledgeForm = React.createClass({

  getInitialState() {
    return ({campaign: {}});
  },

  onChange() {
    this.setState({ campaign: CampaignStore.find(this.id) });
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.campaignListener = CampaignStore.addListener(this.onChange);
    this.id = parseInt(this.props.params.campaignId);
    CampaignActions.getCampaign(this.id);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.campaignListener.remove();
  },

  campaignRedirect() {
    hashHistory.push(`/campaigns/${this.state.campaign.id}`);
  },

  render () {
    return (
      <div className="pledge-form">
        <div className="pledge-form-header">
          <div className="campaign-title" onClick={this.campaignRedirect}>{this.state.campaign.title}</div>

          <div className="campaign-author">by <span style={{"fontWeight": "bold"}}>{this.state.campaign.author}</span></div>

          <div className="group pledge-form-body">
            <div className="group pledge-form-container">

              <div className="pledge-rewards-container">
                <div className = "show-description pad-bottom-28">{"Let's choose your reward!"}</div>
                <PledgeFormRewardsIndex campaign={this.state.campaign}/>
              </div>










              <div className="pledge-sidebar-container">
                <div className="pledge-warning-container">
                  <div className="bold-16 pad-bottom-3">{"Kickrestarter is not a store"}</div>
                  <div className="reg-14 pad-bottom-9">It&#39;s a fabricated nonsenical mess of nonsense.</div>
                  <p className="reg-12 pad-bottom-9">KickRestarter does not guarantee projects or investigate a creator&#39;s ability to complete their project. In fact, none of these projects are even real.  So if you find yourself supporting one, and being confused as to the outcome, look inward.  The answer lies within your soul, not on Kickrestarter.</p>
                  <a href="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" >Click here for a picture of an elephant!</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PledgeForm;
