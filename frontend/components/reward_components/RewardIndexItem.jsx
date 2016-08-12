const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');
const PledgeActions = require('../../actions/pledge_actions');
const CampaignActions = require('../../actions/campaign_actions');



const RewardsIndexItem = React.createClass({

  getInitialState() {
    return {expanded: false, amount: this.props.reward.min_amount};
  },

  parseDeliveryDate(){
    // return this.props.reward.delivery_date;
    let mil = Date.parse(this.props.reward.delivery_date.toString());
    let dateObj = new Date(mil);
    let month = MethodModule.months[dateObj.getMonth()+1];
    let year = dateObj.getFullYear();
    return month + " " + year.toString();

  },

  submitPledge(e) {
    console.log("RsubmitPledge!");
    console.log(e.currentTarget);
    e.preventDefault();
    PledgeActions.createPledge(
      {
        pledge:
          {
            pledger_id: SessionStore.currentUser().id,
            reward_id: this.props.reward.id,
            amount: parseInt(this.state.amount)
          }
      }
    );
    CampaignActions.getCampaign(this.props.reward.campaign_id);
  },

  changeAmount(e) {
    console.log("changeAmount");
    this.setState({amount: e.target.value});
    console.log(e.target);
  },

  clickReward(e) {
    console.log("REWARD CLICKED!");
    console.log(e.currentTarget);
    if (this.state.expanded) {
      this.setState({expanded: false});
    } else {
      this.setState({expanded: true});
    }
  },


  render() {
    let expandedSection = (<div></div>);
    if (this.state.expanded){
      expandedSection = (
        <div className="reward-input">
          <form onClick={this.submitPledge} className="pledge-form group">
            <input
              type="text"
              onChange={this.changeAmount}
              autoFocus="true"
              id="thick-input"
              value={this.state.amount} />

              <div onClick={this.formSubmit} id="submit-pledge-button" className="new-reward-options-container bold-14 group reward-form-submit submit-campaign">
                  <span className="reward-form-option button-text">Submit your pledge!</span>
              </div>
          </form>


        </div>
      );
    }
    return (
      <div className="reward-item" onClick={this.clickReward}>

        <div className="reward-min">{"Pledge " + MethodModule.parseDollarAmount(this.props.reward.min_amount)+ " or more"}</div>
        <div className="reward-item-title">{this.props.reward.title}</div>
        <div className="reward-item-description">{this.props.reward.description}</div>
        { expandedSection }
        <div className="reward-delivery-label">ESTIMATED DELIVERY</div>
        <div>{this.parseDeliveryDate()}</div>
        <div className="reward-backer-label">{MethodModule.parseBackers(this.props.reward.backers.length)}</div>
      </div>
    );
  }
});

module.exports = RewardsIndexItem;
