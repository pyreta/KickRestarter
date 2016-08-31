const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const RewardActions = require('../../actions/reward_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const CampaignFormConstants = require('../../constants/campaign_form_constants');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const RewardsIndex = require("./RewardsIndex");



const InfoForm = React.createClass({


  categorySelections() {
    let categorySelections = Object.keys(CampaignFormConstants.CATEGORIES).map(function(category_id, i){
      return (
        <option key={i} value={category_id}>{ CampaignFormConstants.CATEGORIES[category_id] }</option>
      );
    });
    return categorySelections;
  },

  componentDidMount(){
    console.log(this.props.query.category);
  },


  render() {
    let previewImage;
    if (this.props.imageUrl) {
      previewImage = (
        <div className="preview-image fade-in">
          <img
            alt="Project image"
            src={this.props.imageUrl}
            width="100 px"
            height="auto"/>
        </div>
      );
    } else {
      previewImage = (<div></div>);
    }

    let previewVideo;

    if (this.props.embedUrl) {
      previewVideo = (
        <div className="preview-video info-video">
          <iframe
            width="449"
            height="252.5625"
            src={this.props.embedUrl}
            frameBorder="0" allowFullScreen>
          </iframe>
        </div>
      );
    } else {
      previewVideo = (<div></div>);
    }

    let category = 0;
    if (this.props.query.category){
      category = parseInt(this.props.query.category);
    }
    return (

        <div className="new-info-form-container new-form-container group">

          <div className="form-field-containers">


            <div className="form-field-container group">
              {previewImage}
              <div className="field-label">Campaign image</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="file"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeFile}
                  placeholder="Upload an image" />
                </div>
                <div className="reg-12 input-field-description">
                  upload a super cool picture for your campaign!
                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">Campaign title</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeTitle}
                  value={this.props.titleState}
                  placeholder={JSON.stringify(this.props.location)} />
                </div>
                <div className="reg-12 input-field-description">
                  Your project title and blurb should be simple, specific, and memorable. Our search tools run through these sections of your project, so be sure to incorporate any key words here!                </div>
                <div className="reg-12 input-field-description">
                  These words will help people find your project, so choose them wisely! Your name will be searchable too.                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">Short blurb</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                <textarea
                  maxLength="135"
                  className="no-input required textarea campaign-input-field"
                  onChange={this.props.changeBlurb}
                  value={this.props.blurbState}
                  placeholder="Short Blurb"/>
                </div>
                <div className="reg-12 input-field-description">
                  {"If you had to describe what you're creating in one tweet, how would you do it?"}                </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">Category</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <select value={category} className="category-select campaign-input-field" onChange={this.props.changeCategory}>
                  <option value="0" disabled>Choose category</option>
                  { this.categorySelections() }
                  </select>
                </div>
                <div className="reg-12 input-field-description">
                  {"There is no such category as Fingershoes, so don't even think about it."}
                  </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">End date</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="date"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeDate}
                  value={this.props.dateState}
                  placeholder="Upload an image" />
                </div>
                <div className="reg-12 input-field-description">
                  {"Wake up, wake up, wake up it's the first of the month.  Get up, get up, get up cash your checks and get up."}
                  </div>
              </div>
            </div>


            <div className="form-field-container group">
              <div className="field-label">Campaign Description</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                <textarea
                  className="no-input required textarea campaign-input-field textarea-big"
                  onChange={this.props.changeDescription}
                  placeholder="Description"
                  value={this.props.descriptionState} />
                </div>
                <div className="reg-12 input-field-description">
                  {"Here's your chance to really wax poetic.  Just go on and on and on about stuff that nobody cares about."}
                  </div>
              </div>
            </div>

            <div className="form-field-container group">
              <div className="field-label">Funding Goal</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeGoal}
                  value={this.props.goalState}
                  placeholder="Number between one and a zillion" />
                </div>
                <div className="reg-12 input-field-description">
                  {"How much money do you want to take from people?"}
                  </div>
              </div>
            </div>

            <div className="form-field-container group">
              {previewVideo}
              <div className="field-label">Embed a video</div>
              <div className="campaign-input-container">
                <div className="input campaign-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.props.changeURL}
                  value={this.props.urlState}
                  placeholder="www.randomYouTubelink.com" />
                </div>
                <div className="reg-12 input-field-description">
                  {"Emdeb a video in your project so people don't have to read all that crap you wrote."}
                  </div>
              </div>
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

module.exports = InfoForm;
