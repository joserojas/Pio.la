# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Piola_session',
  :secret      => '2300ff278e848d76c1388a51b7192e7096f9def805b6da0c9b4e59c9e25da5729ddacf5a6a0c8e7453aefe8d0864740605e6ee3dedd994dc2c9205ddcb3c05fa'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
