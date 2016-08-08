class Pledge < ActiveRecord::Base
  belongs_to(
    :pledger,
    class_name: "User",
    foreign_key: :pledger_id,
    primary_key: :id
  )

  belongs_to(
    :reward,
    class_name: "Reward",
    foreign_key: :reward_id,
    primary_key: :id
  )
end
