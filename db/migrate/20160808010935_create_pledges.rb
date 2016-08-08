class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :reward_id, null: false
      t.integer :pledger_id, null: false

      t.timestamps null: false
    end
  end
end
