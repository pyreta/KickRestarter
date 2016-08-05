class Campaign < ActiveRecord::Base

  has_attached_file :image, default_url: "shame.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
