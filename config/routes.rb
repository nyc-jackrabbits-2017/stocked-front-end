Rails.application.routes.draw do
  root to: 'stocks#index'
  get 'stocks/:id' => 'stocks#show'
end
