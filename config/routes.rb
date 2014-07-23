Rails.application.routes.draw do
  root 'home#index'

  resources :todos, only: [:create, :index, :show, :destroy, :update]
end
