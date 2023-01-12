Rails.application.routes.draw do
  root to: 'home#home', as: 'home'
  get 'home/home'
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  mount ActionCable.server => '/cable'
end
