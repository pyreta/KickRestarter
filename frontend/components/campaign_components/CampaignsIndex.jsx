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
    this.setState({ categoryId: e.target.value });
    CampaignActions.fetchCategory(e.target.value);
  },

  onChange() {
    this.setState({campaigns: CampaignStore.all()});
  },

  componentDidMount() {
    this.listener = CampaignStore.addListener(this.onChange);
    CampaignActions.fetchCampaigns();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {

    let campaignList = this.state.campaigns.map(function(el, i){
      return ( <Link key={i} to={`/campaigns/${el.id}`}><CampaignIndexItem campaign={el}/></Link>);
    });



    return (

              <div className="group">

              <div className="group">
                <div className="input campaign-input navbar-input">
                  <input
                  type="text"
                  className="no-input campaign-input-field"
                  onChange={this.changeSearch}
                  value={this.state.searchQuery}
                  placeholder="search..." />
                </div>
              </div>



                <div className="input campaign-input">
                  <select value={this.state.categoryId} className="category-select campaign-input-field" onChange={this.changeCategory}>
                  <option value="0" >All Categories</option>
                  { this.categorySelections() }
                </select>

                </div>


                  { campaignList }
              </div>
            );
  }

});

module.exports = CampaignsIndex;
