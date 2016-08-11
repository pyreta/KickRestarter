class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :campaign_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.datetime :date, null: false

      t.timestamps null: false
    end
  end
end
