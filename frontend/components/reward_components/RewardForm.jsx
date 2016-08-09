const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardActions = require('../../actions/reward_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionForm = React.createClass({

  redirectIfNotCurrentUser() {
    if (SessionStore.currentUser().id !== this.props.params.campaignId) {
      hashHistory.push("/");
    }
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfNotCurrentUser);
    this.campaignListener = CampaignStore.addListener(this.onChange);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.campaignListener.remove();

  },

  getInitialState() {
    return {
      title: "",
      description: "",
      min_amount: "",
      delivery_date: "",
    };
  },

  formSubmit(e) {
    console.log(e.target.class);
    e.preventDefault();
    let data = {reward:
      {
        campaign_id: this.props.params.campaignId,
        description: this.state.description,
        min_amount: this.state.min_amount,
        delivery_date: this.state.delivery_date,
        title: this.state.title
      }
    };
    RewardActions.createReward(data);
    hashHistory.push(`/campaigns/${this.props.params.campaignId}`);
  },


  changeTitle(e) {
    this.setState({title: e.target.value});
  },

  changeDescription(e){
    this.setState({description: e.target.value});
  },
  // FIX DATE FORMATTING STUFF!!!
  changeDate(e){
    this.setState({delivery_date: e.target.value});
  },

  changeAmount(e){
    this.setState({min_amount: e.target.value});
  },

  errors() {
    const errors = ErrorStore.errors("reward-form");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render() {
    return (
      <div className="login-form input-form">
        { this.errors() }
        <div className="form-padding">

          <div className="form-label">Create a new Reward</div>
            <form onSubmit={this.formSubmit}>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeTitle}
                  placeholder="Title"
                  value={this.state.title} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeAmount}
                  placeholder="Amount"
                  value={this.state.min_amount} />
              </div>

              <div className="input">
                <input
                  type="date"
                  className="no-input"
                  onChange={this.changeDate}
                  placeholder="Delivery Date"
                  value={this.state.delivery_date} />
              </div>

              <div className="input">
                <textarea
                  className="no-input"
                  onChange={this.changeDescription}
                  placeholder="Description"
                  value={this.state.password} />
              </div>


              <div className="submit">
                <input
                  type="submit"
                  className="button"
                  id="login-button"
                  value="Create Reward"/>
              </div>
            </form>

          </div>


      </div>
    );
  }
});

module.exports = SessionForm;
