const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

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
    return { currentUser: false };
  },

  logOutClick(e) {
    e.preventDefault();
    SessionActions.logOut();
    this.setState({ currentUser: false });
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
               <li><a href="#">About us</a></li>
               <li>
                  <Link to="/"><img src={window.logoNavbar}></img></Link>
                </li>
                <li><a href="#">search</a></li>
                <li><a href="#/signup">Sign up</a></li>
                <li>{ greeting }</li>
               <li>
                 <a href="#" id="icon" >{ profileIcon }</a>
                 <ul className="header-nav-drop-down">
                   <li><a href="#/discover">Discover</a></li>
                   <li><a href="#">Start a project</a></li>
                   <li><a href="#">About us</a></li>
                   <li><a href="#">Search</a></li>
                   <li><a href="#/login">Log in</a></li>
                   <li><a href="#/signup">Sign up</a></li>
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
