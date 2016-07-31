# Phase 3: Categorys (2 day, W2 Tu 6pm)

## Rails
### Models
* Category
* Tag
* Tagging

### Controllers
* Api::CategorysController (create, destroy, index, show, update)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder

## Flux
### Views (React Components)
* CategorysIndex
  - CategoryIndexItem
* CategoryForm

### Stores
* Category

### Actions
* `ApiActions.receiveAllCategorys`
* `ApiActions.receiveSingleCategory`
* `ApiActions.deleteCategory`
* `CategoryActions.fetchAllCategorys`
* `CategoryActions.fetchSingleCategory`
* `CategoryActions.createCategory`
* `CategoryActions.editCategory`
* `CategoryActions.destroyCategory`

### ApiUtil
* `ApiUtil.fetchAllCategorys`
* `ApiUtil.fetchSingleCategory`
* `ApiUtil.createCategory`
* `ApiUtil.editCategory`
* `ApiUtil.destroyCategory`

## Gems/Libraries
