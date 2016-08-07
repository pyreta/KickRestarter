class State < ActiveRecord::Base

  has_many(
    :cities,
    class_name: "City",
    foreign_key: :state_id,
    primary_key: :id
  )

  has_many(
    :citizens,
    through: :cities,
    source: :citizens
  )

  has_many(
    :campaigns,
    through: :citizens,
    source: :campaigns
  )

end
