class CreateSubCategories < ActiveRecord::Migration
  def change
    create_table :sub_categories do |t|
      t.string :title
      t.integer :category_id, null: false

      t.timestamps null: false
    end
  end
end
