Rails.application.routes.draw do
  resources :users

  root to: 'stocks#index'
  get 'stocks/:id' => 'stocks#show'
end
