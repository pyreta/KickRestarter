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
      expanded: false,
      amount: this.props.reward.min_amount
    };
  },

  parseDeliveryDate(){
    // return this.props.reward.delivery_date;
    let mil = Date.parse(this.props.reward.delivery_date.toString());
    let dateObj = new Date(mil);
    let month = MethodModule.months[dateObj.getMonth()+1];
    let year = dateObj.getFullYear();
    return month + " " + year.toString();

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

  submitReward(e) {
    console.log("RsubmitReward!");
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

  },

  changeAmount(e) {
    console.log("changeAmount");
    this.setState({amount: e.target.value});
    console.log(e.target);
  },


  render() {
    // let expandedSection = (<div></div>);
    // if (this.state.expanded){
    //   expandedSection = (
    //   <div className="reward-input">
    //     <form onClick={this.submitReward}>
    //       <input
    //         type="text"
    //         onChange={this.changeAmount}
    //         autoFocus="true"
    //         value={this.state.amount} />
    //
    //         <div className="submit">
    //           <input
    //             type="submit"
    //             className="button"
    //             id="back-project-button"
    //             value="Submit Reward"/>
    //         </div>
    //     </form>
    //
    //
    //   </div>);
    // }
    return (
      <div className="reward-item" onClick={this.clickReward}>

        <div className="reward-radio group">
          <input type="radio" name="reward" value={this.props.reward.id}/>
          <div className="reward-min">{"Pledge " + MethodModule.parseDollarAmount(this.props.reward.min_amount)+ " or more"}</div>
        </div>

        <div className="reward-item-title pad-left">{this.props.reward.title}</div>
        <div className="reward-item-description pad-left">{this.props.reward.description}</div>
        { expandedSection }
        <div className="reward-delivery-label pad-left">ESTIMATED DELIVERY</div>
        <div className="pad-left">{this.parseDeliveryDate()}</div>
        <div className="reward-backer-label pad-left">{MethodModule.parseBackers(this.props.reward.backers.length)}</div>
      </div>
    );
  }
});

module.exports = PledgeFormRewardsIndexItem;
