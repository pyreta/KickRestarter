# Phase 2: Flux Architecture and Campaign CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Campaign

### Controllers
* Api::CampaignsController (create, destroy, index, show, update)

### Views
* campaigns/index.json.jbuilder
* campaigns/show.json.jbuilder

## Flux
### Views (React Components)
* CampaignsIndex
  - CampaignsIndexItem
* CampaignForm

### Stores
* Campaign

### Actions
* `ApiActions.receiveAllCampaigns`
* `ApiActions.receiveSingleCampaign`
* `ApiActions.deleteCampaign`
* `CampaignActions.fetchAllCampaigns`
* `CampaignActions.fetchSingleCampaign`
* `CampaignActions.createCampaign`
* `CampaignActions.editCampaign`
* `CampaignActions.destroyCampaign`

### ApiUtil
* `ApiUtil.fetchAllCampaigns`
* `ApiUtil.fetchSingleCampaign`
* `ApiUtil.createCampaign`
* `ApiUtil.editCampaign`
* `ApiUtil.destroyCampaign`

## Gems/Libraries
