const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const CampaignActions = require('../../actions/campaign_actions');
const SessionStore = require('../../stores/session_store');
const CampaignStore = require('../../stores/campaign_store');
const ErrorStore = require('../../stores/error_store');
const CampaignFormConstants = require('../../constants/campaign_form_constants');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const CampaignIndexItem = require("./CampaignIndexItem");




const CampaignsIndex = React.createClass({

  categorySelections() {
    let categorySelections = Object.keys(CampaignFormConstants.CATEGORIES).map(function(category_id, i){
      return (
        <option key={i} value={category_id}>{ CampaignFormConstants.CATEGORIES[category_id] }</option>
      );
    });
    return categorySelections;
  },

  getInitialState() {
    return { campaigns: CampaignStore.all(), searchQuery: "", categoryId: "0" };
  },

  changeSearch(e){
    this.setState({ searchQuery: e.target.value });
    CampaignActions.fetchSearch(e.target.value);
  },

  changeCategory(e){
    this.lastCategory = this.state.categoryId;
    this.setState({ categoryId: e.target.value });
    CampaignActions.fetchCategory(e.target.value);
  },

  onChange() {
    if (CampaignStore.all().length === 0){
      console.log("Empty braa");
      jQuery(".category-modal").removeClass('hidden');
      this.emptyCategory = this.state.categoryId;
      this.setState({categoryId: this.lastCategory});
    } else {
      this.setState({campaigns: CampaignStore.all()});
    }
  },

  componentDidMount() {
    this.listener = CampaignStore.addListener(this.onChange);
    CampaignActions.fetchCampaigns();

    jQuery("body").addClass('background-campaign-show');

  },

  componentWillUnmount() {
    this.listener.remove();
    jQuery("body").removeClass('background-campaign-show');
  },

  sortCategory(){
    return this.state.categoryId;
  },

  createCategoryCampaign(){
    hashHistory.push(`/start?category=${this.emptyCategory}`);
  },

  render() {

    let campaignList = this.state.campaigns.map(function(el, i){
      return ( <Link key={i} to={`/campaigns/${el.id}`}><CampaignIndexItem campaign={el}/></Link>);
    });



    return (

              <div className="group hidden-overflow">

                <div style={{"position":"relative"}}>
                  <div onClick={this.createCategoryCampaign}
                    className="animated flipInY category-modal hidden">No {CampaignFormConstants.CATEGORIES[this.emptyCategory]} Campaigns yet
                    <div>Click to make one</div>
                    </div>

                <div className="search-container">
                  <div className="group search-toggle hidden animated flipInY">
                    <div className="input campaign-input navbar-input">
                      <input
                      type="text"
                      id="search"
                      className="no-input campaign-input-field"
                      onChange={this.changeSearch}
                      value={this.state.searchQuery}
                      placeholder="search..." />
                    </div>
                  </div>
                </div>


                <div className="category-filter category-container group">
                <div>{"Campaigns sorted by "}</div>


                  <div className="category-filter-container">
                    <select value={this.state.categoryId} className="filter-dropdown category-filter" onChange={this.changeCategory}>
                      <option value="0" >Everything</option>
                      { this.categorySelections() }
                    </select>
                  </div>
                </div>
              </div>

                <div className={"campaign-index-container"}>
                  <div className={"index-title"}>{"Discover campaigns in " + CampaignFormConstants.CATEGORIES[parseInt(this.state.categoryId)]}</div>
                  { campaignList }
                </div>
              </div>

            );
  }

});

module.exports = CampaignsIndex;
