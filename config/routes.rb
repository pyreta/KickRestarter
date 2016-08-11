Rails.application.routes.draw do


  get 'comments/index'

  get 'comments/create'

  get 'comments/destroy'

root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show] do
    end
    resource :session, only:[:create, :destroy]
    resources :categories, only:[:show, :index] do
      resources :subcategories, only:[:index]
    end
    resources :campaigns, only:[:index, :show, :create, :destroy, :update]
    resources :pledges
    resources :rewards
    resources :comments 
  end
end
