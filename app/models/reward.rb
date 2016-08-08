class Reward < ActiveRecord::Base
  belongs_to(
    :campaign,
    class_name: "Campaign",
    foreign_key: :campaign_id,
    primary_key: :id
  )

  has_many(
    :pledges,
    class_name: "Pledge",
    foreign_key: :reward_id,
    primary_key: :id
  )

end
