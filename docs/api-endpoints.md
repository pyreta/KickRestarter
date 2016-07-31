# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Campaigns

- `GET /api/campaigns`
  - Campaigns index/search
  - accepts `category` query param to list campaigns by category
  - accepts pagination params (if I get there)
- `POST /api/campaigns`
- `GET /api/campaigns/:id`
- `PATCH /api/campaigns/:id`
- `DELETE /api/campaigns/:id`

### Pledges

- `GET /api/pledges`
- `POST /api/pledges`
- `GET /api/pledges/:id`
- `PATCH /api/pledges/:id`
- `DELETE /api/pledges/:id`
- `GET /api/users/:id/pledges`
- `GET /api/campaigns/:id/pledges`
  - index of all pledges for a campaign
  - accepts pagination params (if I get there)

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`
- `GET /api/users/:id/comments`
- `GET /api/campaigns/:id/comments`
  - index of all comments for a campaign
  - accepts pagination params (if I get there)

### Category and Sub-Category

- A campaign's category and sub-category will be included in the campaign show template
- `GET /api/categories`
  - includes query param for typeahead suggestions
- `GET /api/categories/:category_id/sub_categories`
  - includes query param for typeahead suggestions
- `POST /api/campaigns/:campaign_id/sub-category`: add sub-category to campaign by name
- `DELETE /api/campaigns/:campaign_id/:sub_category_id`: remove sub-category from campaign by
  name
