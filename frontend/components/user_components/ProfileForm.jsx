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
const CampaignIndexItem = require('../campaign_components/CampaignIndexItem');
const UserPledgeIndexItem = require('./UserPledgeIndexItem');



const ProfileForm = React.createClass({
  getInitialState() {
    return( { image: null, imageUrl: null } );
  },

  componentDidMount(){
    this.setState( {image: this.user.image, imageUrl: this.user.image_url} );
  },

  componentWillMount(){
    this.user = SessionStore.currentUser();
  },

  changeUsername(){

  },

  changeUrl(){

  },

  changeAbout(){

  },

  changeEmail(){

  },

  render() {
    let pledges = this.user.pledges.map((pledge, i)=>{
      return (<UserPledgeIndexItem key={i} pledge={pledge}/>);
    });

    return (

      <div className="profile-container">
        <div className="new-info-form-container new-form-container group">

          <div className="form-field-containers">


            <div className="form-field-container group">
              <div className="field-label">username</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeUsername}
                  value={this.user.username}
                  placeholder="username" />
                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">website</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.changeUrl}
                  value={this.user.url}
                  placeholder="www.yourwebsite.com" />
                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">email</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.changeEmail}
                  value={this.user.email}
                  placeholder="you@yourdomain.com" />
                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">About</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                <textarea
                  className="no-input required textarea campaign-input-field textarea-big"
                  onChange={this.changeAbout}
                  placeholder="Description"
                  value={this.user.biography} />
                </div>
              </div>
            </div>

        </div>

        <div className="profile-picture-container group">
          <img src={ this.state.imageUrl } />
        </div>
        <div className="profile-pledge-index">
          {
            pledges
          }
        </div>
      </div>
      </div>

    );
  }
});

module.exports = ProfileForm;
