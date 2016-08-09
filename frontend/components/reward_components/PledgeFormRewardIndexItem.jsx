const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const MethodModule = require('../../constants/method_module');



const RewardsIndexItem = React.createClass({

  getInitialState() {
    return {expanded: false};
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


  render() {
    let expandedSection = (<div></div>);
    if (this.state.expanded){
      expandedSection = (<div>kljahsdfgkjhasdfkjhasdfkjhsdf</div>);
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
