class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :title, null:false
      t.text :blurb, null:false
      t.text :description
      t.text :risks
      t.text :body
      t.integer :author_id, null:false
      t.integer :category_id, null:false
      t.integer :sub_category_id
      t.integer :location_id
      t.datetime :end_date, null:false
      t.boolean :live, default:false
      t.boolean :approved, default:false
      t.integer :goal, null:false
      t.string :video_url

      t.timestamps null: false
    end
  end
end
