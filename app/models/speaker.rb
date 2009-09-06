class Speaker < ActiveRecord::Base
	validates_presence_of :name
	validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :message => " invalido", :on => :create
end

