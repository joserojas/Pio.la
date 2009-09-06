class UserSession < Authlogic::Session::Base
  def self.oauth_consumer
    OAuth::Consumer.new("7P41WeFU4Mb5XRAIgX3A5w", "OuK2KldHmeKUpLzoHuOgAXvo7u32wyUG4QPC8p7tUEk",
    { :site=>"http://twitter.com",
      :authorize_url => "http://twitter.com/oauth/authenticate" })
  end
end