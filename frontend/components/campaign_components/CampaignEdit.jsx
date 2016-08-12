const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CampaignActions = require('../../actions/campaign_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignFormConstants = require('../../constants/campaign_form_constants');




const CampaignForm = React.createClass({



  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  onChange() {
    this.campaign = CampaignStore.find(this.id);

    this.setState({
      id: 0,
      title: this.campaign.title,
      blurb: this.campaign.blurb,
      categoryId: this.campaign.categoryId,
      url: this.campaign.video_url,
      goal: this.campaign.goal,
      description: this.campaign.description,
      days: this.campaign.days_to_go,
      imageUrl: this.campaign.image_url
    });
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.campaignListener = CampaignStore.addListener(this.onChange);
    this.id = parseInt(this.props.params.campaignId);
    CampaignActions.getCampaign(this.id);

  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.campaignListener.remove();
  },

  getInitialState() {
    return {
      id: 0,
      title: "",
      blurb: "",
      categoryId: "",
      url: "",
      goal: "",
      description: "",
      days: "",
      imageFile: null,
      imageUrl: null
    };
  },

  formSubmit(e) {
    let formData = new FormData();
    if (this.state.imageFile) {
      formData.append("campaign[image]", this.state.imageFile);
    }
    formData.append("campaign[title]", this.state.title);
    formData.append("campaign[blurb]", this.state.blurb);
    formData.append("campaign[categoryId]", this.state.categoryId);
    formData.append("campaign[video_url]", this.state.url);
    formData.append("campaign[goal]", this.state.goal);
    formData.append("campaign[description]", this.state.description);
    formData.append("campaign[days]", this.state.days);

    console.log(e.target.class);
    e.preventDefault();
    CampaignActions.editCampaign(formData, this.id);
    hashHistory.push(`/campaigns/${this.id}`);
  },

  changeTitle(e) {
    console.log("changeTitle");

    this.setState({title: e.target.value});
  },

  changeURL(e) {
    console.log("changeURL");

    this.setState({url: e.target.value});
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

  changeDays(e){
    console.log("changeDays");
    this.setState({days: e.target.value});
  },

  changeDate(e){
    console.log("changeDate");
    console.log(e.target.value);
  },

  changeCategory(e){
    console.log("changeCategory");
    this.setState({categoryId: e.target.value});
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

  render() {

    return (
      <div className="campaign-form input-form">
        { this.errors() }
        <div className="form-padding">

          <div className="form-label">Edit your Campaign</div>
            <form onSubmit={this.formSubmit}>

            <div className="preview-image">
              <img
                alt="Project image"
                src={this.state.imageUrl}
                width="100 px"
                height="auto"/>
            </div>

            <div className="input campaign-input">
              <input
                type="file"
                className="no-input"
                onChange={this.changeFile}
                placeholder="Upload an image" />
            </div>

              <div className="input campaign-input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeTitle}
                  placeholder="Project Title"
                  value={this.state.title} />
              </div>


              <div className="input">
                <textarea
                  maxLength="135"
                  className="no-input required textarea"
                  onChange={this.changeBlurb}
                  placeholder="Short Blurb"
                  value={this.state.blurb} />
              </div>

              <div className="input">
                <select value={this.state.categoryId} className="category-select" onChange={this.changeCategory}>
                <option value="0" disabled>Choose category</option>
                  { this.categorySelections() }
                </select>
              </div>



              <div className="input campaign-input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeGoal}
                  placeholder="Goal"
                  value={this.state.goal} />
              </div>

              <div className="input campaign-input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeDays}
                  placeholder="Number of Days"
                  value={this.state.days} />
              </div>

              <div className="input campaign-input">
                <input
                type="date"
                className="no-input"
                onChange={this.changeDate}
                placeholder="Upload an image" />
              </div>

              <div className="input description">
                <textarea
                  className="no-input required textarea"
                  onChange={this.changeDescription}
                  placeholder="Description"
                  value={this.state.description} />
              </div>

              <div className="input campaign-input">
              <input
              type="text"
              className="no-input"
              onChange={this.changeURL}
              placeholder="Video URL"
              value={this.state.url} />
              </div>

              <a href="#" className="forgot">Forgot your password?</a>

              <div className="submit">
                <input
                  type="submit"
                  className="button"
                  id="login-button"
                  value="Update Campaign!"/>
              </div>


              <div className="checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  value="Remember me"/>
                  <label id="remember-label" htmlFor="remember">Remember me</label>
              </div>
              <div className="line"></div>

              <div className="submit" onClick={this.guestClick}>
                <input
                  type="submit"
                  id = "facebook-button"
                  value="Create demo campaign"/>
              </div>

              <p className="never-post">
                We are totally going to post on Facebook
                <br/>
                without your permission.
              </p>



            </form>
          </div>
          <div className="login-footer">
          New to Kickrestarter?
          <a className="signup-link" href="#/signup">Sign Up</a>
          </div>
      </div>
    );
  }
});

module.exports = CampaignForm;
