class Comment < ActiveRecord::Base
  validates :author_id, :campaign_id, :body, :date, presence: true

  belongs_to(
    :campaign,
    class_name: "Campaign",
    foreign_key: :campaign_id,
    primary_key: :id
  )

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  def parsed_date 

  end

end
