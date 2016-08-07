class Campaign < ActiveRecord::Base

  has_attached_file :image, default_url: "urkel-default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_one(
    :city,
    through: :author,
    source: :city
  )

  has_one(
    :state,
    through: :city,
    source: :state
  )

  def funded
    "funded"
  end

  def pledged
    "pledged"
  end

  def video_embed_url
    video_url.split("watch?v=").join("embed/")
  end

  def days_to_go
    #x = Time.zone.parse("2018-01-31 00:00:00.0000")
    # y = x+5.day
    ((end_date-Time.now)/86400.00).to_i
  end

end
