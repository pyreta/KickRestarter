const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const LoginForm = React.createClass({

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  getInitialState() {
    return {username: "", password: ""};
  },

  formSubmit(e) {
    console.log(e.target.class);
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

  guestClick() {
    this.setState({username: "pyreta", password: "password"});
  },

  changeUsername(e) {
    this.setState({username: e.target.value});
  },

  changePassword(e){
    this.setState({password: e.target.value});
  },

  errors() {
    const errors = ErrorStore.errors("login");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  render() {
    return (
      <div className="login-form input-form">
        { this.errors() }
        <div className="form-padding">

          <div className="form-label">Log In</div>
            <form onSubmit={this.formSubmit}>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeUsername}
                  placeholder="Email"
                  value={this.state.username} />
              </div>

              <div className="input">
                <input
                  type="password"
                  className="no-input"
                  onChange={this.changePassword}
                  placeholder="Password"
                  value={this.state.password} />
              </div>

              <a href="#" className="forgot">Forgot your password?</a>

              <div className="submit">
                <input
                  type="submit"
                  className="button"
                  id="login-button"
                  value="Log me in!"/>
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
                  value="Log in as a Guest"/>
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

module.exports = LoginForm;
