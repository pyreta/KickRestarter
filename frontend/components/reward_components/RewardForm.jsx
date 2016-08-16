const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardFormActions = require('../../actions/reward_form_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const RewardStore = require('../../stores/reward_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardsIndex = require("./RewardsIndex");
const RewardFormIndex = require("./RewardFormIndex");



const RewardForm = React.createClass({

  getInitialState() {
    this.campaign = {};
    return {
      title: "",
      description: "",
      min_amount: "",
      delivery_date: "",
      campaign: {}
    };
  },

  addReward(){
    RewardFormActions.createReward({
      min_amount: 0,
      title: "",
      description: "",
      delivery_date: "",
      id: RewardStore.nextId()
    });
  },

  render() {
    return (

        <div className="new-reward-form-container new-form-container hidden group">

          <div className="form-field-containers">


          <RewardFormIndex />

            <div onClick={this.addReward} className="add-reward reg-14">
              <h3>Add a reward</h3>
            </div>





          </div>


          <div className="campaign-form-sidebar-container">
            <div className="bold-16 pad-bottom-3">{"Kickrestarter is not a store"}</div>
            <div className="reg-14 pad-bottom-9">It&#39;s a fabricated nonsenical mess of nonsense.</div>
            <p className="reg-12 pad-bottom-9">KickRestarter does not guarantee projects or investigate a creator&#39;s ability to complete their project. In fact, none of these projects are even real.  So if you find yourself supporting one, and being confused as to the outcome, look inward.  The answer lies within your soul, not on Kickrestarter.</p>
            <a href="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg" >Click here for a picture of an elephant!</a>

          </div>

        </div>


    );

  }
});

module.exports = RewardForm;
