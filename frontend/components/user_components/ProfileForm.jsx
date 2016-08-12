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



const ProfileForm = React.createClass({
  getInitialState() {
    return( { image: null, imageUrl: null } );
  },

  componentDidMount(){
    this.user = SessionStore.currentUser();
    this.setState( {image: this.user.image, imageUrl: this.user.image_url} );
  },


  render() {

    return (
      <div className="group">
        { SessionStore.currentUser().username }
        <div className="profile-picture-container group">
          <img src={ this.state.imageUrl } />
        </div>

      </div>
    );
  }
});

module.exports = ProfileForm;
