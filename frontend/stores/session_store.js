const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

let _logIn = function (user) {
  _currentUser = user;
  console.log(SessionStore.isUserLoggedIn());
  console.log("You signed in son..");
  console.log(_currentUser);
};

let _logOut = function () {
  console.log("You logged out ma..");
  _currentUser = {};
};

SessionStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function () {
  return _currentUser.id ? true : false;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
        _logIn(payload.currentUser);
        SessionStore.__emitChange();
      break;

    case SessionConstants.LOGOUT:
        _logOut();
        SessionStore.__emitChange();
      break;

  }
};

module.exports = SessionStore;
