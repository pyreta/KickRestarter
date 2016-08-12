const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardActions = require('../../actions/reward_actions');
const PledgeActions = require('../../actions/pledge_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');



const PledgeFormRewardsIndexItem = React.createClass({

  getInitialState() {
    return {
      selected: false,
      amount: this.props.reward.min_amount
    };
  },

  parseDeliveryDate(){
    let mil = Date.parse(this.props.reward.delivery_date.toString());
    let dateObj = new Date(mil);
    let month = MethodModule.months[dateObj.getMonth()+1];
    let year = dateObj.getFullYear();
    return month + " " + year.toString();

  },

  clickReward(e) {
    console.log("REWARD CLICKED!");
    console.log(e.currentTarget);
    this.props.selectedCallback(this.props.id);
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
    hashHistory.push(`/campaigns/${this.props.reward.campaign_id}`);
  },

  changeAmount(e) {
    console.log("changeAmount");
    this.setState({amount: e.target.value});
    console.log(e.target);
  },

  formattedComponent() {
    if (this.props.selected_id === this.props.id){
      return (
        <div className="reward-item selected-reward-radio" onClick={this.clickReward}>
          <div className="reward-radio group">
            <input className="selected-min" type="radio" name="reward" value={this.props.reward.id}/>
            <div className="reward-min">{"Pledge " + MethodModule.parseDollarAmount(this.props.reward.min_amount)+ " or more"}</div>
          </div>

          <div className="reward-item-title pad-left">{this.props.reward.title}</div>
          <div className="reward-item-description pad-left">{this.props.reward.description}</div>
          <div className="reward-delivery-label pad-left">ESTIMATED DELIVERY</div>
          <div className="pad-left">{this.parseDeliveryDate()}</div>
          <div className="reward-backer-label pad-left">{MethodModule.parseBackers(this.props.reward.backers.length)}</div>

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

        </div>
      );
    } else {
      return (
        <div className="reward-item" onClick={this.clickReward}>
          <div className="reward-radio group">
            <input type="radio" name="reward" value={this.props.reward.id}/>
            <div className="reward-min">{"Pledge " + MethodModule.parseDollarAmount(this.props.reward.min_amount)+ " or more"}</div>
          </div>

          <div className="reward-item-title pad-left">{this.props.reward.title}</div>
          <div className="reward-item-description pad-left">{this.props.reward.description}</div>
          <div className="reward-delivery-label pad-left">ESTIMATED DELIVERY</div>
          <div className="pad-left">{this.parseDeliveryDate()}</div>
          <div className="reward-backer-label pad-left">{MethodModule.parseBackers(this.props.reward.backers.length)}</div>
        </div>
      );
    }

  },


  render() {

    return (
      <div>
        { this.formattedComponent() }

      </div>
    );
  }
});

module.exports = PledgeFormRewardsIndexItem;
