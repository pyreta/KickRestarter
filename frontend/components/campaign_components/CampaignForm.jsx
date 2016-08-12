const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CampaignActions = require('../../actions/campaign_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const RewardStore = require('../../stores/reward_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignFormConstants = require('../../constants/campaign_form_constants');
const RewardForm = require('../reward_components/RewardForm');
const InfoForm = require('../reward_components/InfoForm');




const CampaignForm = React.createClass({



  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.rewardListener = RewardStore.addListener(this.updateRewards);
  },

  updateRewards(){
    this.setState({rewards: RewardStore.all()});
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.rewardListener.remove();
  },

  getInitialState() {
    return {
      title: "Thundercats are Loose!",
      blurb: "thundercats, thundercats, thundercats are loose!",
      categoryId: 11,
      video_url: "https://www.youtube.com/watch?v=JVAnIFYFKSM",
      goal: 1000,
      description: "I already told you thundercats are loose!",
      end_date: "2019-03-06",
      imageFile: null,
      imageUrl: null,
      embedUrl: null,
      rewards: []
    };
  },

  formSubmit(e) {
    let formData = new FormData();
    if (this.state.imageFile) {
      formData.append("campaign[image]", this.state.imageFile);
    }
    formData.append("campaign[title]", this.state.title);
    formData.append("campaign[blurb]", this.state.blurb);
    formData.append("campaign[category_id]", this.state.categoryId);
    formData.append("campaign[video_url]", this.state.video_url);
    formData.append("campaign[goal]", this.state.goal);
    formData.append("campaign[description]", this.state.description);
    formData.append("campaign[end_date]", this.state.end_date);
    formData.append("campaign[rewards]", JSON.stringify(this.state.rewards));


    e.preventDefault();
    CampaignActions.createCampaign(formData);
    hashHistory.push("/discover");
  },

  changeTitle(e) {
    console.log("changeTitle");

    this.setState({title: e.target.value});
  },

  parseUrl(url) {
    let urlSplit = url.split("watch?v=");
    if (urlSplit.length == 2){
      this.setState({embedUrl: urlSplit.join("embed/")});
    } else {
      this.setState({embedUrl: null});
    }
  },

  changeURL(e) {
    console.log("changeURL");


    this.setState({video_url: e.target.value});
    this.parseUrl(e.target.value);
  },

  changeBlurb(e){
    console.log("changeBlurb");
    this.setState({blurb: e.target.value});
  },

  changeDescription(e){
    console.log("changeDescription");
    this.setState({description: e.target.value});
  },

  changeGoal(e){
    console.log("changeGoal");
    this.setState({goal: e.target.value});
  },

  changeDate(e){
    console.log("changeDate");
    this.setState({end_date: e.target.value});
    console.log(this.state);
  },

  changeCategory(e){
    this.setState({categoryId: parseInt(e.target.value)});
    console.log(e.target.value);
    console.log(this.state);
    console.log("that was state");
  },

  changeFile(e){
    console.log("changeFile");
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile : file, imageUrl: fileReader.result});
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  },


  errors() {
    const errors = ErrorStore.errors("campaign");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  categorySelections() {
    let categorySelections = Object.keys(CampaignFormConstants.CATEGORIES).map(function(category_id, i){
      return (
        <option key={i} value={category_id}>{ CampaignFormConstants.CATEGORIES[category_id] }</option>
      );
    });
    return categorySelections;
  },


  clickRewards(){
    jQuery(".new-reward-form-container").removeClass('hidden');
    jQuery(".new-info-form-container").addClass('hidden');

    jQuery(".reward-option").addClass('form-selected');
    jQuery(".info-option").removeClass('form-selected');

    jQuery(".new-info-header").addClass('hidden');
    jQuery(".new-reward-header").removeClass('hidden');

    jQuery(".new-info-header").removeClass('fade-in');
    jQuery(".new-reward-header").addClass('fade-in');

  },

  clickInfo(){
    jQuery(".new-reward-form-container").addClass('hidden');
    jQuery(".new-info-form-container").removeClass('hidden');

    jQuery(".reward-option").removeClass('form-selected');
    jQuery(".info-option").addClass('form-selected');

    jQuery(".new-info-header").removeClass('hidden');
    jQuery(".new-reward-header").addClass('hidden');

    jQuery(".new-info-header").addClass('fade-in');
    jQuery(".new-reward-header").removeClass('fade-in');
  },

  render() {

    return (
      <div>
        <div className="new-reward">

          <div className="group new-reward-form-buttons">
            <div className="new-reward-options-container bold-14 group">
                <div onClick={this.clickInfo} className="reward-form-option info-option checkFont form-selected">Info</div>
                <span onClick={this.clickRewards} className="reward-form-option reward-option checkFont">Rewards</span>
            </div>

            <div className="spacer">{" "}</div>

            <div onClick={this.formSubmit} className="new-reward-options-container bold-14 group reward-form-submit submit-campaign">
                <span className="reward-form-option">Submit your campaign!</span>
            </div>
          </div>

          <div className="new-info-header headers fade-in">
            <span>Let’s get started.</span>
            <div>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, description, and project category.</div>
          </div>

          <div className="new-reward-header headers hidden">
            <span>Set your rewards and other junk.</span>
            <div>Invite backers to be a part of the creative experience by offering rewards like a copy machine, a sack of hamburgers, or a special appearence on the Phil Donohue Show.</div>
          </div>


          <InfoForm
            changeTitle={this.changeTitle}
            titleState={this.state.title}
            changeBlurb={this.changeBlurb}
            blurbState={this.state.blurb}

            imageUrl={this.state.imageUrl}
            embedUrl={this.state.embedUrl}

            urlState={this.state.video_url}
            changeURL={this.changeURL}

            descriptionState={this.state.description}
            changeDescription={this.changeDescription}

            goalState={this.state.goal}
            changeGoal={this.changeGoal}

            dateState={this.state.date}
            changeDate={this.changeDate}

            changeCategory={this.changeCategory}
            categoryState={this.categoryId}

            changeFile={this.changeFile}

            />
          <RewardForm />


        </div>





        {

          // <div className="campaign-form input-form">
          // { this.errors() }
          // <div className="form-padding">
          //
          // <div className="form-label">Start a Campaign</div>
          // <form onSubmit={this.formSubmit}>
          //
          // <div className="input campaign-input">
          // <input
          // type="text"
          // className="no-input"
          // onChange={this.changeTitle}
          // placeholder="Project Title"
          // value={this.state.title} />
          // </div>
          //
          // { previewImage }
          //
          // <div className="input campaign-input">
          // <input
          // type="file"
          // className="no-input"
          // onChange={this.changeFile}
          // placeholder="Upload an image" />
          // </div>
          //
          // <div className="input">
          // <textarea
          // maxLength="135"
          // className="no-input required textarea"
          // onChange={this.changeBlurb}
          // placeholder="Short Blurb"
          // value={this.state.blurb} />
          // </div>
          //
          // <div className="input">
          // <select value={this.state.categoryId} className="category-select" onChange={this.changeCategory}>
          // <option value="0" disabled>Choose category</option>
          // { this.categorySelections() }
          // </select>
          // </div>
          //
          //
          //
          // <div className="input campaign-input">
          // <input
          // type="text"
          // className="no-input"
          // onChange={this.changeGoal}
          // placeholder="Goal"
          // value={this.state.goal} />
          // </div>
          //
          //
          // <div className="input campaign-input">
          // <input
          // type="date"
          // className="no-input"
          // onChange={this.changeDate}
          // placeholder="Upload an image" />
          // </div>
          //
          // <div className="input description">
          // <textarea
          // className="no-input required textarea"
          // onChange={this.changeDescription}
          // placeholder="Description"
          // value={this.state.description} />
          // </div>
          //
          // <div className="input campaign-input">
          // <input
          // type="text"
          // className="no-input"
          // onChange={this.changeURL}
          // placeholder="Video URL"
          // value={this.state.url} />
          // </div>
          //
          // { previewVideo }
          //
          // <a href="#" className="forgot">Forgot your password?</a>
          //
          // <div className="submit">
          // <input
          // type="submit"
          // className="button"
          // id="login-button"
          // value="Create Campaign!"/>
          // </div>
          //
          //
          // <div className="checkbox">
          // <input
          // type="checkbox"
          // id="remember"
          // value="Remember me"/>
          // <label id="remember-label" htmlFor="remember">Remember me</label>
          // </div>
          // <div className="line"></div>
          //
          // <div className="submit" onClick={this.guestClick}>
          // <input
          // type="submit"
          // id = "facebook-button"
          // value="Create demo campaign"/>
          // </div>
          //
          // <p className="never-post">
          // We are totally going to post on Facebook
          // <br/>
          // without your permission.
          // </p>
          //
          //
          //
          // </form>
          // </div>
          // <div className="login-footer">
          // New to Kickrestarter?
          // <a className="signup-link" href="#/signup">Sign Up</a>
          // </div>
          // </div>
        }
      </div>
    );
  }
});

module.exports = CampaignForm;
