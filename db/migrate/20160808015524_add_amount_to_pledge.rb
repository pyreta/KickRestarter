class AddAmountToPledge < ActiveRecord::Migration
  def change
    add_column :pledges, :amount , :integer, null:false
  end
end
