Rails.application.routes.draw do
  resources :users
  resources :sessions

  root to: 'stocks#index'
  get 'stocks/:id' => 'stocks#show'
end
