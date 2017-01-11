Rails.application.routes.draw do
  resources :users
  resources :sessions

  root to: 'sessions#new'
  get '/profile' => 'stocks#index'
  get 'stocks/:id' => 'stocks#show'
end
