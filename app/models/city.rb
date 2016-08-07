class City < ActiveRecord::Base

  has_many(
    :citizens,
    class_name: "User",
    foreign_key: :location_id,
    primary_key: :id
  )

  has_many(
    :campaigns,
    through: :citizens,
    source: :campaigns
  )

  belongs_to(
    :state,
    class_name: "State",
    foreign_key: :state_id,
    primary_key: :id
  )

end
