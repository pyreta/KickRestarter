const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const NavBar = React.createClass({

  sessionChanged() {
    let name;
    if (SessionStore.isUserLoggedIn()) {
      this.setState({currentUser: SessionStore.currentUser().username});
    } else {
      this.setState({currentUser: false});
    }

  },

  componentDidMount() {
    SessionStore.addListener(this.sessionChanged);
  },

  getInitialState() {
    return { currentUser: false, search: false};
  },

  logOutClick(e) {
    e.preventDefault();
    SessionActions.logOut();
    this.setState({ currentUser: false });
    hashHistory.push("/login");
  },

  toggleSearch(){
    // jQuery("body").addClass('background-campaign-show');
    if (this.state.search === false){
      jQuery(".search-toggle").removeClass('hidden');
      // jQuery(".search-toggle").attr("auto-focus", "true");
      document.getElementById("search").focus();
      this.setState({search: true});
    } else {
      jQuery(".search-toggle").addClass('hidden');
      this.setState({search: false});
    }
  },

  render() {

    let greeting;
    let profileIcon = (<div></div>);
    if (SessionStore.isUserLoggedIn()) {
      greeting = (


          <button onClick={this.logOutClick}>Log Out</button>
        );

      profileIcon = (
        <div className="profile-icon-container">
          <img src={SessionStore.currentUser().image_url}></img>
        </div>
      );
    } else {
      greeting = (<a href="#/login">Log In</a>);
    }


    return (
      <div className="nav-bar">
      <header className="header">
         <div className="header-wrap group">



           <nav className="header-nav">

             <ul className="group">
               <li><a href="#/discover">Discover</a></li>
               <li><a href="#/start">Start a project</a></li>
               <li><a href="http://media.mnn.com/assets/images/2015/06/octopus.jpg">An Octopus</a></li>
               <li>
                  <Link to="/"><img src={window.logoNavbar}></img></Link>
                </li>
                <li onClick={this.toggleSearch}><a href="#/discover"><i className="fa fa-search"></i></a></li>
                <li><a href="#/signup">Sign up</a></li>
                <li>{ greeting }</li>
               <li>
                 <a href="#" id="icon" >{ profileIcon }</a>
                 <ul className="header-nav-drop-down">
                   <li><a href="#/discover">Discover</a></li>
                   <li><a href="#/start">Start a project</a></li>
                   <li><a href="http://media.mnn.com/assets/images/2015/06/octopus.jpg">An Octopus</a></li>
                   <li><a href="#/profile">Profile</a></li>
                   <li>Log out</li>
                 </ul>
               </li>
             </ul>
           </nav>

         </div>
       </header>
      </div>
    );
  }
});

module.exports = NavBar;
