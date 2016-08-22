# KickRestarter

[KickRestarter live][heroku]

[heroku]: https://kickrestarter.herokuapp.com/

KickRestarter is a full-stack web application inspired by Kickstarter.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation


### Single-Page App

  KickRestarter is a single page app that renders everything within one element on the root page using React.js.  The implementation of front end authentication allows for a user to sign in, and have access to applicable content during the user experience.  The information on the current user is kept in a `SessionStore` which makes ajax requests to the Rails backend.

### Creation of Campaigns with Rewards

  `Campaign`s are stored in the database as belonging to a `creator`, and having many `rewards`.  Upon rendering the `Campaign` show page, rewards are collected through a non n+1 SQL call to join the `rewards` and `campaigns` tables.  Unlimited `reward`s may be created at the same time the `campaign` is created, and then all the information is sent to the database together.

  [image of campaign form](docs/kickrestarter.png)

  `Campaign`index items dynamically reflect the percent pledged through a progress bar with a width calculated in real time:

  [image of progress-bar code](docs/progress-bar.png)


### Pledges

  `Pledges` are the join table that links `rewards` with `campaigns` and `users`.  `User`s can have many `rewards` through their `pledges` and a `campaign` can have many `backers` through `pledges`.  The `campaign` display page has React components for each linked `reward` which aggregates the total number of `backer`s for each reward through it's `pledges.`  Users can select `reward`s from this page and choose to   make a `pledge` for a minimum amount.

### Search

Searching campaigns is a standard feature of Kickstarter.  Users can do a realtime search right from the Navbar.
