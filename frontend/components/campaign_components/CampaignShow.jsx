const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignStore = require('../../stores/campaign_store');
const CampaignActions = require('../../actions/campaign_actions');
const MethodModule = require('../../constants/method_module');
const RewardsIndex = require('../reward_components/RewardsIndex');
const CommentsIndex = require('../comment_components/CommentsIndex');

const CampaignShow = React.createClass({


  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.campaignListener = CampaignStore.addListener(this.onChange);
    this.id = parseInt(this.props.params.campaignId);
    CampaignActions.getCampaign(this.id);
    jQuery("body").addClass('background-campaign-show');

  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.campaignListener.remove();
    jQuery("body").removeClass('background-campaign-show');
  },

  onChange() {
    this.setState({
      campaign: CampaignStore.find(this.id)
    });
  },

  daysToGo() {
    return this.state.campaign.days_to_go;
  },

  getInitialState() {
    const potentialCampaign = CampaignStore.find(this.props.params.campaignId);
    return ({campaign: potentialCampaign ? potentialCampaign : {}});
  },

  backProject(e) {
    e.preventDefault();
    hashHistory.push(`campaigns/${this.props.params.campaignId}/pledge`);
  },

  chooseCampaign() {
    jQuery(".choose-campaign").addClass('comment-toggle-selected');
    jQuery(".choose-comments").removeClass('comment-toggle-selected');
    jQuery(".all-about").removeClass('hidden');
    jQuery(".all-comments").addClass('hidden');
  },

  chooseComments() {
    jQuery(".choose-campaign").removeClass('comment-toggle-selected');
    jQuery(".choose-comments").addClass('comment-toggle-selected');
    jQuery(".all-about").addClass('hidden');
    jQuery(".all-comments").removeClass('hidden');
  },

  render() {
    let location = this.state.campaign.city + ", " + this.state.campaign.state;
    let days = this.state.campaign.days_to_go === 1 ? "day" : "days";
    let backers = this.state.campaign.backers === 1 ? " backer" : " backers";

    let commentsIndex = <div>Comments Loading...</div>;
    if (this.state.campaign.comments){
      commentsIndex = (<CommentsIndex campaign={this.state.campaign}/>);
    }
    if (!SessionStore.isUserLoggedIn()){
      commentsIndex = <div>you must be <Link to={"/login"}>logged in</Link> to view comments...</div>;
    }
    return (
      <div className="group">
      <div className="campaign-container">

        <div className="campaign-title">{this.state.campaign.title}</div>
        <div className="campaign-author">by <span style={{"fontWeight": "bold"}}>{this.state.campaign.author}</span></div>

        <div className="campaign-body">
          <div className="preview-video">
            <iframe
              width="680"
              height="382.5"
              src={this.state.campaign.video_embed_url}
              frameBorder="0" allowFullScreen>
            </iframe>
          </div>

          <div className="campaign-show-stats">

            <div>
              <span className="big-stats">
                {MethodModule.parseAmount(this.state.campaign.backers)}
              </span>
              <span className="small-stat-labels">
                {backers}
              </span>
            </div>

            <div>
              <span className="big-stats">
                { MethodModule.parseDollarAmount(this.state.campaign.amount_pledged)}
              </span>
              <span className="small-stat-labels">
                {" pledged of "+ MethodModule.parseDollarAmount(this.state.campaign.goal) + " goal" }
              </span>
            </div>


            <div>
              <span className="big-stats">
              {MethodModule.parseAmount(this.state.campaign.days_to_go)}
              </span>
              <span className="small-stat-labels">
              {days +" to go"}
              </span>
            </div>

            <form onSubmit={this.backProject}>
            <div className="submit">
              <input
                type="submit"
                className="button"
                id="back-project-button"
                value="Back This Project"/>
            </div>
            </form>

          </div>


          <ul className="location small-stat-labels">
            <li className="small-campaign-name project-stats-item">
              <div className="marker"><img src={window.mapMarker}/></div>
            </li>
            <li className="show-location">{ location }</li>
          </ul>




          <div className = "show-description">{this.state.campaign.blurb}</div>

          <div className="bold-12 link-section group">
            <ul className="group">
              <li>Monkeys:</li>
              <li><a href="http://krackersworld.com/wp-content/uploads/2013/03/Thats-a-big-monkey.png">big monkey</a></li>
              <li><a href="http://images.animalpicturesociety.com/images/02/2_lovely-small-monkey-baby-picture-download-free-hd-wallpapers-of-animal-baby.jpg">small monkey</a></li>
              <li><a href="https://s-media-cache-ak0.pinimg.com/736x/42/c3/35/42c3354e4faf708c012c4e6b65d4c762.jpg">hairless monkey</a></li>
            </ul>
          </div>
        </div>


      </div>



      <div className="bottom-background group">

        <div className="comment-toggle-bar group">
          <div className="comment-toggle-button-container group">
            <div className="comment-toggle-button choose-campaign comment-toggle-selected" onClick={this.chooseCampaign}>Campaign</div>
            <div className="comment-toggle-button choose-comments" onClick={this.chooseComments}>Comments</div>
          </div>
        </div>

        <div className="bottom-container">
          <div className="about-container">
            <div className="about-body">
              <div className="all-about">
                <div className = "show-description about-title">About this project</div>
                <div className="about-p">{this.state.campaign.description}</div>
              </div>

              <div className="all-comments">
                { commentsIndex }
              </div>

            </div>
          </div>
          <div className="rewards-container">
            <div>
              <div className = "reward-title">Rewards</div>
            </div>
            <RewardsIndex campaign={this.state.campaign}/>
          </div>
        </div>
      </div>



















      </div>
    );
  }

});

module.exports = CampaignShow;
