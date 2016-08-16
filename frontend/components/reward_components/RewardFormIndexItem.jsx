const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardFormActions = require('../../actions/reward_form_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardsIndex = require("./RewardsIndex");



const RewardFormIndexItem = React.createClass({

  getInitialState() {
    this.campaign = {};
    return {
      title: this.props.rewardState.title,
      description: this.props.rewardState.description,
      min_amount: this.props.rewardState.min_amount,
      delivery_date: this.props.rewardState.delivery_date,
      id: this.props.rewardState.id
    };
  },


  changeTitle(e) {
    this.setState({title: e.target.value});
    let data = Object.assign({}, this.state, { title: e.target.value });
    RewardFormActions.editReward(data);
  },

  changeDescription(e){
    this.setState({description: e.target.value});
    let data = Object.assign({}, this.state, { description: e.target.value });

    RewardFormActions.editReward(data);
  },

  changeDate(e){
    this.setState({delivery_date: e.target.value});
    let data = Object.assign({}, this.state, { delivery_date: e.target.value });
    RewardFormActions.editReward(data);
  },

  changeAmount(e){
    this.setState({min_amount: e.target.value});
    let data = Object.assign({}, this.state, { min_amount: e.target.value });
    RewardFormActions.editReward(data);
  },

  errors() {
    const errors = ErrorStore.errors("reward-form");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  deleteReward() {
    RewardFormActions.removeReward(this.props.rewardState.id);
  },

  render() {
    return (
            <div className="form-field-container group reward-form-item">
            <div className="form-field-container group">
              <div className="field-label">Reward title</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.changeTitle}
                  value={this.state.title}
                  placeholder="Title" />
                </div>
                <div className="reg-12 input-field-description">
                  {"Call your reward something cool so people think they're getting something of value"}
                  </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">Pledge amount</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.changeAmount}
                  value={this.state.min_amount}
                  placeholder="Amount" />
                </div>
                <div className="reg-12 input-field-description">
                  {"This is the minimum amount of money a backer needs to fork over in order to actually get this thing."}
                  </div>
              </div>
            </div>


            <div className="form-field-container group">
              <div className="field-label">Reward Description</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                <textarea
                  maxLength="135"
                  className="no-input required textarea campaign-input-field"
                  onChange={this.changeDescription}
                  placeholder="Reward Description"
                  value={this.state.description} />
                </div>
                <div className="reg-12 input-field-description">
                  {"Go ahead, let us in.  What's this about?  Anything?"}
                </div>
              </div>
            </div>



            <div className="form-field-container group">
              <div className="field-label">Delivery date</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="date"
                  className="no-input campaign-input-field"
                  onChange={this.changeDate}
                  value={this.state.delivery_date}
                  placeholder="Upload an image" />
                </div>
                <div className="reg-12 input-field-description">
                  {"Here's a chance to really quanitfy your false promises!"}
                  </div>
              </div>
            </div>
            <h1 onClick={this.deleteReward}>{`Delete Reward ${this.props.rewardState.id}`}</h1>
            </div>



    );
  }
});

module.exports = RewardFormIndexItem;
