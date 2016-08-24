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


  // render() {
  //
  //   return (
  //     <div className="group">
  //       { SessionStore.currentUser().username }
  //       <div className="profile-picture-container group">
  //       <img src={ this.state.imageUrl } />
  //       </div>
  //       <br/>
  //       { SessionStore.currentUser().biography }
  //       <br/>
  //       { JSON.stringify(SessionStore.currentUser().pledges) }
  //       <br/>
  //       { SessionStore.currentUser().url }
  //       { SessionStore.currentUser().email }
  //
  //     </div>
  //   );
  // }
  changeFile(){

  },

  changeUrl(){

  },

  render() {

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
                  onChange={this.props.changeTitle}
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
                  onChange={this.props.changeURL}
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
                  onChange={this.props.changeURL}
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
                  onChange={this.props.changeDescription}
                  placeholder="Description"
                  value={this.user.biography} />
                </div>
              </div>
            </div>
            {
        //
        //     <div className="form-field-container group">
        //       <div className="field-label">Category</div>
        //       <div className="campaign-input-container">
        //         <div className="input campaign-input">
        //           <select value={this.props.categoryState} className="category-select campaign-input-field" onChange={this.props.changeCategory}>
        //           <option value="0" disabled>Choose category</option>
        //           { this.categorySelections() }
        //           </select>
        //         </div>
        //         <div className="reg-12 input-field-description">
        //           {"There is no such category as Fingershoes, so don't even think about it."}
        //           </div>
        //       </div>
        //     </div>
        //
        //     <div className="form-field-container group">
        //       <div className="field-label">End date</div>
        //       <div className="campaign-input-container">
        //         <div className="input campaign-input">
        //           <input
        //           type="date"
        //           className="no-input campaign-input-field"
        //           onChange={this.props.changeDate}
        //           value={this.props.dateState}
        //           placeholder="Upload an image" />
        //         </div>
        //         <div className="reg-12 input-field-description">
        //           {"Wake up, wake up, wake up it's the first of the month.  Get up, get up, get up cash your checks and get up."}
        //           </div>
        //       </div>
        //     </div>
        //
        //
        //     <div className="form-field-container group">
        //       <div className="field-label">Campaign Description</div>
        //       <div className="campaign-input-container">
        //         <div className="input campaign-input">
        //         <textarea
        //           className="no-input required textarea campaign-input-field textarea-big"
        //           onChange={this.props.changeDescription}
        //           placeholder="Description"
        //           value={this.props.descriptionState} />
        //         </div>
        //         <div className="reg-12 input-field-description">
        //           {"Here's your chance to really wax poetic.  Just go on and on and on about stuff that nobody cares about."}
        //           </div>
        //       </div>
        //     </div>
        //
        //     <div className="form-field-container group">
        //       <div className="field-label">Funding Goal</div>
        //       <div className="campaign-input-container">
        //         <div className="input campaign-input">
        //           <input
        //           type="text"
        //           className="no-input campaign-input-field"
        //           onChange={this.props.changeGoal}
        //           value={this.props.goalState}
        //           placeholder="Number between one and a zillion" />
        //         </div>
        //         <div className="reg-12 input-field-description">
        //           {"How much money do you want to take from people?"}
        //           </div>
        //       </div>
        //     </div>
        //
        //     <div className="form-field-container group">
        //       {previewVideo}
        //       <div className="field-label">Embed a video</div>
        //       <div className="campaign-input-container">
        //         <div className="input campaign-input">
        //           <input
        //           type="text"
        //           className="no-input campaign-input-field"
        //           onChange={this.props.changeURL}
        //           value={this.props.urlState}
        //           placeholder="www.randomYouTubelink.com" />
        //         </div>
        //         <div className="reg-12 input-field-description">
        //           {"Emdeb a video in your project so people don't have to read all that crap you wrote."}
        //           </div>
        //       </div>
        //     </div>
        //
        //
      }
        </div>

        <div className="profile-picture-container group">
        <img src={ this.state.imageUrl } />
        </div>

      </div>
      </div>

    );
  }
});

module.exports = ProfileForm;
