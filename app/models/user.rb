class User < ActiveRecord::Base
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  has_attached_file :image, default_url: "profile_default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user.is_password?(password) ? @user : nil
  end

  has_many(
    :campaigns,
    class_name: "Campaign",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :pledges,
    class_name: "Pledge",
    foreign_key: :pledger_id,
    primary_key: :id
  )

  has_many(
    :rewards,
    through: :pledges,
    source: :reward
  )

  has_many(
    :pledged_campaigns,
    through: :rewards,
    source: :campaign
  )

  belongs_to(
    :city,
    class_name: "City",
    foreign_key: :location_id,
    primary_key: :id
  )

  has_one(
    :state,
    through: :city,
    source: :state
  )

  attr_reader :password
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
