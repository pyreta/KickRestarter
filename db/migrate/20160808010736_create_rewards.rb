class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :campaign_id, null: false
      t.datetime :delivery_date
      t.integer :min_amount, null: false

      t.timestamps null: false
    end
    add_index :rewards, :campaign_id
  end
end
