class CreateEvents < ActiveRecord::Migration
  def self.up
    create_table :events do |t|
      t.datetime :event_date
      t.string :title
      t.string :description
      t.string :tags
      t.string :hashtag

      t.timestamps
    end
  end

  def self.down
    drop_table :events
  end
end
