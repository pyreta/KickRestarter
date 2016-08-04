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
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  getInitialState() {
    return {
      name: "",
      email: "",
      email2: "",
      password: "",
      password2: "",
    };
  },

  errors() {
    const errors = ErrorStore.errors("signup");
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formSubmit(e) {
    e.preventDefault();
    if (this.submit){
      SessionActions.signUp(this.state);
    }
    this.submit = true;
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

  guestClick() {
    this.submit = false;
    SessionActions.logIn({username: "pyreta", password: "password"});
  },

  render() {
    this.submit = true;
    return (
      <div className="signup-form input-form">
        { this.errors() }
        <div className="form-padding">

          <div className="form-label">Sign up</div>
            <form onSubmit={this.formSubmit}>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  onChange={this.changeName}
                  placeholder="Name"
                  value={this.state.name} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  placeholder="Email"
                  onChange={this.changeEmail}
                  value={this.state.email} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  placeholder="Re-enter email"
                  onChange={this.changeEmail2}
                  value={this.state.email2} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password} />
              </div>

              <div className="input">
                <input
                  type="text"
                  className="no-input"
                  placeholder="Re-enter Password"
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

              <div className="check">

                  <div className="check-box">
                    <input
                      type="checkbox"
                      id="remember"
                      value="Receive our weekly newsletter and other occasional updates"/>
                  </div>
                  <div className="check-body">
                    <label id="newsletter-label" htmlFor="remember">Receive our weekly newsletter and other occasional updates</label>
                  </div>

              </div>

              <div className="line"></div>

              <div className="submit" onClick={this.guestClick}>
                <input
                  type="submit"
                  id = "facebook-button"
                  value="Log in as a Guest"/>
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
