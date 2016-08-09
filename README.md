# KickRestarter

[Heroku link][heroku]

[heroku]: https://kickrestarter.herokuapp.com/

## Minimum Viable Product

KickRestarter is a web application inspired by Kickstarter that will focus on funding the return of beloved nostagics like Lou Diamond Phillips and slap bracelets. KickRestarter will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:


- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [x] Campaigns
  - [x] Elegant layout displaying campaign goals and details
  - [x] Displays current state of campaign funding
  - [x] Options for creating new campaign
- [ ] Backing campaigns & rewards
  - [ ] Ability to contribute to or withdraw from a campaign
  - [ ] Funds updated instantaneously
- [ ] Search
  - [ ] Real time search displaying top results
  - [ ] Load more option to show all results
- [ ] Discover
  - [ ] Infinite Scrolling
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Animated category menu
  - [ ] Filtering option headers
  - [ ] Campaign recommendations


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for frontend auth
- [x] user signup/signin components
- [x] blank landing component after signin
- [x] style signin/signup components
- [x] seed users

### Phase 2: Campaign Model, API, and components (2 days, W1 F 6pm)

**Objective:** Campaigns can be created, read, edited and destroyed through
the API.

- [x] create `Campaign` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for notes (`CampaignController`)
- [x] jBuilder views for campaign
- [x] test out API interaction in the console.
- implement each campaign component, building out the flux loop as needed.
  - [x] `CampaignIndex`
  - [x] `CampaignIndexItem`
  - [x] `CampaignForm`
- [x] style campaign components like Kickstarter
- [x] seed campaigns

### Phase 3: Categories (2 day, W2 Tu 6pm)

**Objective:** Campaigns belong to Categories, and can be viewed by searching or choosing a category.

- [x] create `Category` model
- build out API, Flux loop, and components for:
  - [x] adding campaigns requires a category
  - [x] moving campaigns to a different category
  - [ ] viewing campaigns by category
- [ ] Use CSS to style new components
- [ ] Seed categories with campaigns

Phase 3 adds organization to the Campaigns. Campaigns belong to a Category,
which has its own `Index` view.

### Phase 4: Pledges (1 days, W2 W 6pm)

**Objective:** Campaigns can be contributd to with multiple pledges.

- [x] create `Pledge` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching pledges for campaign
  - [ ] adding pledges to campaign
- [ ] Style new elements
- [ ] Seed users and add pledges to the seeded Campaigns

### Phase 5: Comments (1 days, W2 Th 6pm)

**Objective:** Users can create profiles and make comments.

- [ ] create `comment` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching comments for user and/or campaign
  - [ ] adding comments to campaign and user profile
- [ ] Style new elements
- [ ] Seed comments and add comments to the seeded campaigns and users


### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Campaigns Index

- [ ] Paginate Campaigns Index API to send 24 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded notes to demo infinite scroll

### Bonus Features (TBD)
- [ ] Likes
- [ ] Credit Card Payments

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
