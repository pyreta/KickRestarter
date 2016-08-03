class RemoveLocationNullConstraintAgain < ActiveRecord::Migration
  def change
    change_column_null :users, :location_id, true
  end
end
