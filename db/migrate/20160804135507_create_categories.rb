class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title, null:false

      t.timestamps null: false
    end
  end
end
