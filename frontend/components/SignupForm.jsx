const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SignUpForm = React.createClass({

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  componentDidMount() {
    // this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  getInitialState() {
    return {
      name: "Email",
      email: "Email",
      email2: "Re-enter email",
      password: "Password",
      password2: "Re-enter password",
    };
  },

  formSubmit(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

  changeName(e) {
    this.setState({name: e.target.value});
  },

  changeEmail(e) {
    this.setState({email: e.target.value});
  },

  changeEmail2(e) {
    this.setState({email2: e.target.value});
  },

  changePassword(e){
    this.setState({password: e.target.value});
  },

  changePassword2(e){
    this.setState({password2: e.target.value});
  },

  render() {

    return (
      <div className="signup-box group input-box">
        <div className="login-padding group">

          <div className="login-label">Sign Up</div>
            <form onSubmit={this.formSubmit}>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeName}
                  value={this.state.name} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeEmail}
                  value={this.state.email} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeEmail2}
                  value={this.state.email2} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changePassword}
                  value={this.state.password} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changePassword2}
                  value={this.state.password2} />
              </div>

              <a href="#" className="forgot">Forgot your password?</a>

              <div className="submit">
                <input
                  type="submit"
                  className="button"
                  id="login-button"
                  value="Sign me up!"/>
              </div>

              <div className="flag">

                  <div className="flag-img">
                    <input
                      type="checkbox"
                      id="remember"
                      value="Receive our weekly newsletter and other occasional updates"/>
                  </div>
                  <div className="flag-body">
                    <label id="newsletter-label" htmlFor="remember">Receive our weekly newsletter and other occasional updates</label>
                  </div>

              </div>

              <div className="line"></div>

              <div className="submit">
                <input
                  type="submit"
                  id = "facebook-button"
                  value="Log in with Facebook"/>
              </div>

              <p className="never-post">
                By signing up, you agree to our terms of use, privacy policy, and
                <br/>
                cookie policy.
              </p>



            </form>
          </div>
          <div className="login-footer">
          Have an account?
          <Link className="signup-link" to={`/login`}>Log In</Link>
          </div>
      </div>
    );
  }
});

module.exports = SignUpForm;
