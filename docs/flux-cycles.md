# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-pledges, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Campaign Cycles

### Campaigns API Request Actions

* `fetchAllCampaigns`
  0. invoked from `CampaignsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/campaigns` is called.
  0. `receiveAllCampaigns` is set as the success callback.


* `createCampaign`
  0. invoked from new campaign button `onClick`
  0. `POST /api/campaigns` is called.
  0. `receiveSingleCampaign` is set as the success callback.


* `fetchSingleCampaign`
  0. invoked from `CampaignDetail` `didMount`/`willReceiveProps`
  0. `GET /api/campaigns/:id` is called.
  0. `receiveSingleCampaign` is set as the success callback.


* `updateCampaign`
  0. invoked from `CampaignForm` `onSubmit`
  0. `POST /api/campaigns` is called.
  0. `receiveSingleCampaign` is set as the success callback.


* `destroyCampaign`
  0. invoked from delete campaign button `onClick`
  0. `DELETE /api/campaigns/:id` is called.
  0. `removeCampaign` is set as the success callback.


### Campaigns API Response Actions

* `receiveAllCampaigns`
  0. invoked from an API callback.
  0. `Campaign` store updates `_campaigns` and emits change.


* `receiveSingleCampaign`
  0. invoked from an API callback.
  0. `Campaign` store updates `_campaigns[id]` and emits change.


* `removeCampaign`
  0. invoked from an API callback.
  0. `Campaign` store removes `_campaigns[id]` and emits change.

### Store Listeners

* `CampaignsIndex` component listens to `Campaign` store.
* `CampaignDetail` component listens to `Campaign` store.


## Pledge Cycles

### Pledges API Request Actions

* `fetchAllPledges`
  0. invoked from `PledgesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/pledges` is called.
  0. `receiveAllPledges` is set as the success callback.

* `createPledge`
  0. invoked from new pledge button `onClick`
  0. `POST /api/pledges` is called.
  0. `receiveSinglePledge` is set as the callback.

* `fetchSinglePledge`
  0. invoked from `PledgeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/pledges/:id` is called.
  0. `receiveSinglePledge` is set as the success callback.

* `updatePledge`
  0. invoked from `PledgeForm` `onSubmit`
  0. `POST /api/pledges` is called.
  0. `receiveSinglePledge` is set as the success callback.

* `destroyPledge`
  0. invoked from delete pledge button `onClick`
  0. `DELETE /api/pledges/:id` is called.
  0. `removePledge` is set as the success callback.

### Pledges API Response Actions

* `receiveAllPledges`
  0. invoked from an API callback.
  0. `Pledge` store updates `_pledges` and emits change.

* `receiveSinglePledge`
  0. invoked from an API callback.
  0. `Pledge` store updates `_pledges[id]` and emits change.

* `removePledge`
  0. invoked from an API callback.
  0. `Pledge` store removes `_pledges[id]` and emits change.

### Store Listeners

* `PledgesIndex` component listens to `Pledge` store.

## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/pledges` is called.
  0. `receiveAllComments` is set as the success callback.

* `createComment`
  0. invoked from new pledge button `onClick`
  0. `POST /api/pledges` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/pledges/:id` is called.
  0. `receiveSingleComment` is set as the success callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/pledges` is called.
  0. `receiveSingleComment` is set as the success callback.

* `destroyComment`
  0. invoked from delete pledge button `onClick`
  0. `DELETE /api/pledges/:id` is called.
  0. `removeComment` is set as the success callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments[id]` and emits change.

* `removeComment`
  0. invoked from an API callback.
  0. `Comment` store removes `_comments[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comment` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `CampaignSearchBar` `onChange` when there is text
  0. `GET /api/campaigns` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `CampaignSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
