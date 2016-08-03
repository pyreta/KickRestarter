const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

  getInitialState() {
    return {username: "Email", password: "Password"};
  },

  formSubmit(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
    console.log("formSubmit");
  },

  changeUsername(e) {
    this.setState({username: e.target.value});
    console.log(this.state);
  },

  changePassword(e){
    this.setState({password: e.target.value});
    console.log(this.state);
  },

  render() {

    return (
      <div className="login-box group">
      <div className="login-box group">

        <div className="login-label">Log In</div>
          <form onSubmit={this.formSubmit}>

            <div className="input">
              <input
                type="text"
                className="no-input"
                onChange={this.changeUsername}
                value={this.state.username} />
            </div>

            <div className="input">
              <input
                type="password"
                className="no-input"
                onChange={this.changePassword}
                value={this.state.password} />
            </div>

            <a href="#" className="forgot">Forgot your password?</a>

            <div className="submit">
              <input
                type="submit"
                className="button"
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

            <div className="submit">
              <input
                type="submit"
                id = "facebook-button"
                value="Log in with Facebook"/>
            </div>

            <p className="never-post">
              We are totally going to post on Facebook
              <br/>
              without your permission.
            </p>

            <div className="login-footer">
              New to Kickstarter?
              <a className="signup-link" href="#">Sign Up</a>
            </div>


          </form>
      </div>
    );
  }
});

module.exports = LoginForm;
