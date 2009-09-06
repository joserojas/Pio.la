class CreateSpeakers < ActiveRecord::Migration
  def self.up
    create_table :speakers do |t|
      t.datetime :speak_time
      t.string :name
      t.string :profile
      t.string :subject
      t.string :description
      t.string :tags
      t.string :twitter_id
      t.string :email
      t.string :stream_url
      t.string :stream_code

      t.timestamps
    end
  end

  def self.down
    drop_table :speakers
  end
end
