ActionController::Routing::Routes.draw do |map|
  map.oauth_login '/oauth_login', { :controller => 'user_sessions', :action => 'create', :method => 'get' }
  map.oauth_register '/oauth_register', { :controller => 'users', :action => 'create', :method => 'get' }
  
  map.resource :account, :controller => "users"
  map.resources :users
  map.resource :user_session
  map.root :controller => "user_sessions", :action => "new"
end
