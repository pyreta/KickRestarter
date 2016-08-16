const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {


  signUp(formData){
    let newData;
    if (formData.email !== formData.email2) {
      ErrorActions.setErrors("signup", ["Confirm Email"]);
      return;
    } else if (formData.password !== formData.password2) {
      ErrorActions.setErrors("signup", ["Confirm Password"]);
      return;
    } else {
      newData = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      };
    }

    SessionApiUtil.signUp(
      newData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser, ErrorActions.setErrors);

  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, ErrorActions.setErrors, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }

};

module.exports = SessionActions;
