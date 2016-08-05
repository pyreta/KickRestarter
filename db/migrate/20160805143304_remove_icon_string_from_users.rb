class RemoveIconStringFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :profile_icon, :string
  end
end
